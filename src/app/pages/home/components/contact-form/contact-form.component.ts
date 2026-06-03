import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FormField } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';

import { type ContactFormFieldTree } from '../../../../core/contact-form/contact-form.factory';
import {
  CONTACT_FORM_DESCRIPTION_MIN_LENGTH,
  MAX_CONTACT_FORM_IMAGES,
} from '../../../../core/contact-form/contact-form.model';
import { type ContactFormSubjectOption } from '../../../../shared/models/contact-form-subject';

@Component({
  selector: 'sh-contact-form',
  imports: [FormField, RouterLink],
  templateUrl: './contact-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent {
  readonly contactForm = input.required<ContactFormFieldTree>();
  readonly subjects = input.required<ContactFormSubjectOption[]>();
  readonly fileError = input<string | undefined>();
  readonly selectedImageNames = input<string[]>([]);
  readonly imageHelp = input.required<string>();
  readonly submitting = input(false);
  readonly submitDisabled = input(false);
  readonly validationSummary = input<string | undefined>();
  readonly successMessage = input<string | undefined>();
  readonly errorMessage = input<string | undefined>();

  readonly filesSelected = output<FileList>();
  readonly submitForm = output<Event>();

  protected onFilesChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      this.filesSelected.emit(target.files);
    }
  }

  protected showFieldError(field: { touched: () => boolean; invalid: () => boolean }): boolean {
    return field.touched() && field.invalid();
  }

  protected readonly descriptionMinLength = CONTACT_FORM_DESCRIPTION_MIN_LENGTH;

  protected descriptionLength(): number {
    return this.contactForm().description().value().trim().length;
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
