import { afterNextRender, ChangeDetectionStrategy, Component, computed, inject, Injector, signal } from '@angular/core';
import { submit } from '@angular/forms/signals';

import { createContactForm, createContactFormModel } from '../../../../core/contact-form/contact-form.factory';
import {
  type ContactFormSubmitPayload,
  EMPTY_CONTACT_FORM_VALUES,
} from '../../../../core/contact-form/contact-form.model';
import { filesToImagePayloads } from '../../../../core/contact-form/contact-form-files';
import { firstInvalidContactFormField, focusContactFormField } from '../../../../core/contact-form/contact-form-focus';
import { ContactFormSubmissionGateway } from '../../../../core/contact-form/contact-form-submission.gateway';
import { CONTACT } from '../../../../shared/data/contact/contact.data';
import {
  CONTACT_ACUTE_CALL_TO_ACTION,
  CONTACT_ACUTE_HEADLINE,
  CONTACT_ACUTE_NOTE,
  CONTACT_FORM_ERROR_MESSAGE,
  CONTACT_FORM_SUCCESS_MESSAGE,
  CONTACT_FORM_VALIDATION_SUMMARY,
  CONTACT_RESPONSE_PROMISE,
} from '../../../../shared/data/contact/contact.messages';
import { CONTACT_FORM_SUBJECTS } from '../../../../shared/data/contact/contact-form-subjects';
import { type ContactFormSubject } from '../../../../shared/models/contact-form-subject';
import { SectionIds } from '../../../../shared/models/section-id';
import { AcuteCalloutComponent } from '../../../../shared/ui/acute-callout/acute-callout.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';

@Component({
  selector: 'sh-contact-form-container',
  imports: [AcuteCalloutComponent, ContactFormComponent],
  templateUrl: './contact-form.container.html',
  host: { class: 'contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormContainer {
  private readonly gateway = inject(ContactFormSubmissionGateway);
  private readonly injector = inject(Injector);

  protected readonly SectionIds = SectionIds;
  protected readonly contact = CONTACT;
  protected readonly subjects = CONTACT_FORM_SUBJECTS;
  protected readonly acuteHeadline = CONTACT_ACUTE_HEADLINE;
  protected readonly acuteCallToAction = CONTACT_ACUTE_CALL_TO_ACTION;
  protected readonly acuteNote = CONTACT_ACUTE_NOTE;
  protected readonly responsePromise = CONTACT_RESPONSE_PROMISE;

  protected readonly model = createContactFormModel();
  protected readonly selectedFiles = signal<File[]>([]);
  protected readonly selectedFilesCount = computed(() => this.selectedFiles().length);
  protected readonly contactForm = createContactForm(this.model, this.selectedFilesCount);

  protected readonly fileError = signal<string | undefined>(undefined);
  protected readonly submitting = signal(false);
  protected readonly successMessage = signal<string | undefined>(undefined);
  protected readonly errorMessage = signal<string | undefined>(undefined);
  protected readonly submitAttempted = signal(false);

  protected readonly submitDisabled = computed(
    () => this.submitting() || (this.submitAttempted() && this.contactForm().invalid())
  );

  protected readonly validationSummary = computed(() =>
    this.submitAttempted() && this.contactForm().invalid() ? CONTACT_FORM_VALIDATION_SUMMARY : undefined
  );

  protected readonly selectedImageNames = computed(() => this.selectedFiles().map((file) => file.name));

  protected onFilesSelected(fileList: FileList): void {
    this.selectedFiles.set([...fileList]);
    this.fileError.set(undefined);
  }

  protected async onSubmit(event: Event): Promise<void> {
    event.preventDefault();

    await submit(this.contactForm, {
      action: async () => this.sendContactInquiry(),
      onInvalid: () => this.handleInvalidSubmit(),
    });
  }

  private handleInvalidSubmit(): void {
    this.submitAttempted.set(true);

    const firstInvalid = firstInvalidContactFormField(this.contactForm);
    if (!firstInvalid) {
      return;
    }

    afterNextRender(() => focusContactFormField(firstInvalid), { injector: this.injector });
  }

  private async sendContactInquiry(): Promise<void> {
    const values = this.model();
    const files = this.selectedFiles();
    const imagePayloads = await filesToImagePayloads(files);
    if (typeof imagePayloads === 'string') {
      this.fileError.set(imagePayloads);
      return;
    }

    const payload: ContactFormSubmitPayload = {
      fullName: values.fullName.trim(),
      streetAddress: values.streetAddress.trim(),
      postalCode: values.postalCode.trim(),
      phone: values.phone.trim(),
      email: values.email.trim(),
      subject: values.subject as ContactFormSubject,
      description: values.description.trim(),
      privacyAccepted: true,
      images: imagePayloads,
    };

    this.submitting.set(true);
    this.errorMessage.set(undefined);

    const result = await this.gateway.submit(payload);
    this.submitting.set(false);

    if (result.ok) {
      this.submitAttempted.set(false);
      this.successMessage.set(CONTACT_FORM_SUCCESS_MESSAGE);
      this.model.set({ ...EMPTY_CONTACT_FORM_VALUES });
      this.contactForm().reset();
      this.selectedFiles.set([]);
      return;
    }

    this.errorMessage.set(result.message || CONTACT_FORM_ERROR_MESSAGE);
  }
}
