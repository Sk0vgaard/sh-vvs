import { afterNextRender, ChangeDetectionStrategy, Component, computed, inject, Injector, signal } from '@angular/core';
import { submit } from '@angular/forms/signals';

import { filesToImagePayloads } from '../../../../core/contact-form/contact-form-files';
import { firstInvalidContactFormField, focusContactFormField } from '../../../../core/contact-form/contact-form-focus';
import { ContactFormSubmissionGateway } from '../../../../core/contact-form/contact-form-submission.gateway';
import { createContactForm, createContactFormModel } from '../../../../core/contact-form/contact-form.factory';
import {
  EMPTY_CONTACT_FORM_VALUES,
  type ContactFormSubmitPayload,
} from '../../../../core/contact-form/contact-form.model';
import { CONTACT_FORM_SUBJECTS } from '../../../../shared/data/contact/contact-form-subjects';
import { CONTACT } from '../../../../shared/data/contact/contact.data';
import {
  CONTACT_ACUTE_CALLOUT,
  CONTACT_FORM_ERROR_MESSAGE,
  CONTACT_FORM_IMAGE_HELP,
  CONTACT_FORM_SUCCESS_MESSAGE,
  CONTACT_FORM_VALIDATION_SUMMARY,
} from '../../../../shared/data/contact/contact.messages';
import { type ContactFormSubject } from '../../../../shared/models/contact-form-subject';
import { AcuteCalloutComponent } from '../../../../shared/ui/acute-callout/acute-callout.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';

@Component({
  selector: 'sh-contact-form-container',
  imports: [AcuteCalloutComponent, ContactFormComponent],
  templateUrl: './contact-form.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormContainer {
  private readonly gateway = inject(ContactFormSubmissionGateway);
  private readonly injector = inject(Injector);

  protected readonly contact = CONTACT;
  protected readonly subjects = CONTACT_FORM_SUBJECTS;
  protected readonly acuteTitle = CONTACT_ACUTE_CALLOUT;
  protected readonly imageHelp = CONTACT_FORM_IMAGE_HELP;

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

  protected onSubmit(event: Event): void {
    event.preventDefault();
    this.submitAttempted.set(true);

    submit(this.contactForm, async () => {
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
        this.successMessage.set(CONTACT_FORM_SUCCESS_MESSAGE);
        this.model.set({ ...EMPTY_CONTACT_FORM_VALUES });
        this.contactForm().reset();
        this.selectedFiles.set([]);
        this.submitAttempted.set(false);
        return;
      }

      this.errorMessage.set(result.message || CONTACT_FORM_ERROR_MESSAGE);
    });

    if (this.contactForm().invalid()) {
      const firstInvalid = firstInvalidContactFormField(this.contactForm);
      if (firstInvalid) {
        const field = firstInvalid;
        afterNextRender(() => focusContactFormField(field), { injector: this.injector });
      }
    }
  }
}
