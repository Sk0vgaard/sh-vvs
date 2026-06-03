import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  CONTACT_FORM_DESCRIPTION_MIN_LENGTH,
  MAX_CONTACT_FORM_IMAGES,
  type ContactFormErrors,
  type ContactFormField,
  type ContactFormValues,
} from '../../../../core/contact-form/contact-form.model';
import { type ContactFormSubjectOption } from '../../../../shared/models/contact-form-subject';

@Component({
  selector: 'sh-contact-form',
  imports: [RouterLink],
  templateUrl: './contact-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent {
  readonly values = input.required<ContactFormValues>();
  readonly errors = input.required<ContactFormErrors>();
  readonly subjects = input.required<ContactFormSubjectOption[]>();
  readonly fileError = input<string | undefined>();
  readonly selectedImageNames = input<string[]>([]);
  readonly imageHelp = input.required<string>();
  readonly submitting = input(false);
  readonly submitDisabled = input(false);
  readonly validationSummary = input<string | undefined>();
  readonly successMessage = input<string | undefined>();
  readonly errorMessage = input<string | undefined>();

  readonly fieldChange = output<{ field: ContactFormField; value: string | boolean }>();
  readonly filesSelected = output<FileList>();
  readonly submitForm = output<void>();

  protected onInput(field: ContactFormField, event: Event): void {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    this.fieldChange.emit({ field, value: target.value });
  }

  protected onPrivacyChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.fieldChange.emit({ field: 'privacyAccepted', value: target.checked });
  }

  protected onFilesChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      this.filesSelected.emit(target.files);
    }
  }

  protected fieldError(field: ContactFormField): string | undefined {
    return this.errors()[field];
  }

  protected readonly descriptionMinLength = CONTACT_FORM_DESCRIPTION_MIN_LENGTH;

  protected descriptionLength(): number {
    return this.values().description.trim().length;
  }

  protected descriptionMinMet(): boolean {
    return this.descriptionLength() >= this.descriptionMinLength;
  }

  protected readonly maxImages = MAX_CONTACT_FORM_IMAGES;

  protected selectedImagesLabel(): string {
    const count = this.selectedImageNames().length;
    if (count === 0) {
      return 'Ingen billeder valgt';
    }

    if (count === 1) {
      return '1 billede valgt';
    }

    return `${count} billeder valgt`;
  }
}
