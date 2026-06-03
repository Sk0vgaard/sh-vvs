import { signal, type Signal, type WritableSignal } from '@angular/core';
import { form } from '@angular/forms/signals';

import { EMPTY_CONTACT_FORM_VALUES } from './contact-form.model';
import { contactFormSchema } from './contact-form.schema';
import { type ContactFormValues } from './contact-form.types';

export function createContactFormModel(): WritableSignal<ContactFormValues> {
  return signal({ ...EMPTY_CONTACT_FORM_VALUES });
}

export function createContactForm(model: WritableSignal<ContactFormValues>, imageCount: Signal<number>) {
  return form(model, (schemaPath) => contactFormSchema(schemaPath, imageCount));
}

export type ContactFormFieldTree = ReturnType<typeof createContactForm>;
