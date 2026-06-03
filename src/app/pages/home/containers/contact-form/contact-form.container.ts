import { afterNextRender, ChangeDetectionStrategy, Component, computed, inject, Injector, signal } from '@angular/core';

import {
  type ContactFormErrors,
  type ContactFormField,
  type ContactFormSubmitPayload,
  type ContactFormValues,
  EMPTY_CONTACT_FORM_VALUES,
} from '../../../../core/contact-form/contact-form.model';
import {
  contactFormIsValid,
  isContactFormSubmittable,
  validateContactForm,
} from '../../../../core/contact-form/contact-form.validator';
import { filesToImagePayloads } from '../../../../core/contact-form/contact-form-files';
import { firstInvalidContactFormField, focusContactFormField } from '../../../../core/contact-form/contact-form-focus';
import { ContactFormSubmissionGateway } from '../../../../core/contact-form/contact-form-submission.gateway';
import { CONTACT } from '../../../../shared/data/contact/contact.data';
import {
  CONTACT_ACUTE_CALLOUT,
  CONTACT_FORM_ERROR_MESSAGE,
  CONTACT_FORM_IMAGE_HELP,
  CONTACT_FORM_SUCCESS_MESSAGE,
  CONTACT_FORM_VALIDATION_SUMMARY,
} from '../../../../shared/data/contact/contact.messages';
import { CONTACT_FORM_SUBJECTS } from '../../../../shared/data/contact/contact-form-subjects';
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

  protected readonly values = signal<ContactFormValues>({ ...EMPTY_CONTACT_FORM_VALUES });
  protected readonly errors = signal<ContactFormErrors>({});
  protected readonly fileError = signal<string | undefined>(undefined);
  protected readonly selectedFiles = signal<File[]>([]);
  protected readonly submitting = signal(false);
  protected readonly successMessage = signal<string | undefined>(undefined);
  protected readonly errorMessage = signal<string | undefined>(undefined);
  protected readonly showFieldErrors = signal(false);
  protected readonly submitAttempted = signal(false);

  protected readonly canSubmit = computed(() => isContactFormSubmittable(this.values(), this.selectedFiles().length));

  protected readonly submitDisabled = computed(
    () => this.submitting() || (this.submitAttempted() && !this.canSubmit())
  );

  protected readonly validationSummary = computed(() =>
    this.showFieldErrors() && !this.canSubmit() ? CONTACT_FORM_VALIDATION_SUMMARY : undefined
  );

  protected readonly selectedImageNames = computed(() => this.selectedFiles().map((file) => file.name));

  private syncFieldErrors(): void {
    this.errors.set(validateContactForm(this.values(), this.selectedFiles().length));
  }

  protected onFieldChange(payload: { field: ContactFormField; value: string | boolean }): void {
    this.values.update((current) => ({ ...current, [payload.field]: payload.value }));
    this.errorMessage.set(undefined);

    if (this.showFieldErrors()) {
      this.syncFieldErrors();
      return;
    }

    this.errors.update((current) => {
      const next = { ...current };
      delete next[payload.field];
      return next;
    });
  }

  protected onFilesSelected(fileList: FileList): void {
    this.selectedFiles.set([...fileList]);
    this.fileError.set(undefined);

    if (this.showFieldErrors()) {
      this.syncFieldErrors();
    }
  }

  protected async onSubmit(): Promise<void> {
    this.submitAttempted.set(true);
    this.showFieldErrors.set(true);
    const values = this.values();
    const files = this.selectedFiles();
    const errors = validateContactForm(values, files.length);

    this.errors.set(errors);
    if (!contactFormIsValid(errors)) {
      const firstInvalid = firstInvalidContactFormField(errors);
      if (firstInvalid) {
        const field = firstInvalid;
        afterNextRender(() => focusContactFormField(field), { injector: this.injector });
      }
      return;
    }

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
      this.values.set({ ...EMPTY_CONTACT_FORM_VALUES });
      this.selectedFiles.set([]);
      this.errors.set({});
      this.showFieldErrors.set(false);
      this.submitAttempted.set(false);
      return;
    }

    this.errorMessage.set(result.message || CONTACT_FORM_ERROR_MESSAGE);
  }
}
