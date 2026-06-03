import { type Signal } from '@angular/core';
import { email, maxLength, type SchemaPathTree, validate } from '@angular/forms/signals';

import { CONTACT_FORM_SUBJECTS } from '../../shared/data/contact/contact-form-subjects';
import { CONTACT_FORM_DESCRIPTION_MIN_LENGTH, MAX_CONTACT_FORM_IMAGES } from './contact-form.model';
import { type ContactFormValues } from './contact-form.types';

const PHONE_PATTERN = /^[+]?[\d\s()-]{8,}$/;
const DK_POSTAL_CODE_PATTERN = /^\d{4}$/;

export function contactFormSchema(schemaPath: SchemaPathTree<ContactFormValues>, imageCount: Signal<number>): void {
  validate(schemaPath.fullName, ({ value }) => {
    if (!value().trim()) {
      return { kind: 'required', message: 'Angiv dit fulde navn.' };
    }
    return undefined;
  });

  validate(schemaPath.streetAddress, ({ value }) => {
    if (!value().trim()) {
      return { kind: 'required', message: 'Angiv vejnavn og nummer.' };
    }
    return undefined;
  });

  validate(schemaPath.postalCode, ({ value }) => {
    const trimmed = value().trim();
    if (!trimmed) {
      return { kind: 'required', message: 'Angiv postnummer.' };
    }
    if (!DK_POSTAL_CODE_PATTERN.test(trimmed)) {
      return { kind: 'pattern', message: 'Angiv et gyldigt dansk postnummer (4 cifre).' };
    }
    return undefined;
  });
  maxLength(schemaPath.postalCode, 4);

  validate(schemaPath.phone, ({ value }) => {
    const trimmed = value().trim();
    if (!trimmed) {
      return { kind: 'required', message: 'Angiv dit telefonnummer.' };
    }
    if (!PHONE_PATTERN.test(trimmed)) {
      return { kind: 'pattern', message: 'Angiv et gyldigt telefonnummer.' };
    }
    return undefined;
  });

  validate(schemaPath.email, ({ value }) => {
    if (!value().trim()) {
      return { kind: 'required', message: 'Angiv din e-mailadresse.' };
    }
    return undefined;
  });
  email(schemaPath.email, { message: 'Angiv en gyldig e-mailadresse.' });

  validate(schemaPath.subject, ({ value }) => {
    const subject = value();
    if (!subject) {
      return { kind: 'required', message: 'Vælg et emne.' };
    }
    if (!CONTACT_FORM_SUBJECTS.some((option) => option.value === subject)) {
      return { kind: 'invalid', message: 'Vælg et gyldigt emne.' };
    }
    return undefined;
  });

  validate(schemaPath.description, ({ value }) => {
    if (imageCount() > MAX_CONTACT_FORM_IMAGES) {
      return { kind: 'maxImages', message: `Maks. ${MAX_CONTACT_FORM_IMAGES} billeder.` };
    }

    const trimmed = value().trim();
    if (!trimmed) {
      return { kind: 'required', message: 'Beskriv din henvendelse.' };
    }
    if (trimmed.length < CONTACT_FORM_DESCRIPTION_MIN_LENGTH) {
      return {
        kind: 'minLength',
        message: `Beskrivelsen skal være mindst ${CONTACT_FORM_DESCRIPTION_MIN_LENGTH}.`,
      };
    }
    return undefined;
  });

  validate(schemaPath.privacyAccepted, ({ value }) => {
    if (!value()) {
      return { kind: 'required', message: 'Du skal acceptere privatlivspolitikken.' };
    }
    return undefined;
  });
}
