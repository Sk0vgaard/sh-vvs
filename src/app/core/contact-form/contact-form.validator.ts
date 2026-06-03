import { CONTACT_FORM_SUBJECTS } from '../../shared/data/contact/contact-form-subjects';
import {
  ALLOWED_CONTACT_FORM_IMAGE_TYPES,
  CONTACT_FORM_DESCRIPTION_MIN_LENGTH,
  MAX_CONTACT_FORM_IMAGE_BYTES,
  MAX_CONTACT_FORM_IMAGES,
} from './contact-form.model';
import { type ContactFormErrors, type ContactFormTextField, type ContactFormValues } from './contact-form.types';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+]?[\d\s()-]{8,}$/;
const DK_POSTAL_CODE_PATTERN = /^\d{4}$/;

function trimmedField(values: ContactFormValues, field: ContactFormTextField): string {
  switch (field) {
    case 'fullName':
      return values.fullName.trim();
    case 'streetAddress':
      return values.streetAddress.trim();
    case 'postalCode':
      return values.postalCode.trim();
    case 'phone':
      return values.phone.trim();
    case 'email':
      return values.email.trim();
    case 'description':
      return values.description.trim();
  }
}

export function validateContactForm(values: ContactFormValues, imageCount: number): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const fullName = trimmedField(values, 'fullName');
  const trimmedStreet = trimmedField(values, 'streetAddress');
  const trimmedPostal = trimmedField(values, 'postalCode');
  const phone = trimmedField(values, 'phone');
  const email = trimmedField(values, 'email');
  const description = trimmedField(values, 'description');

  if (!fullName) {
    errors.fullName = 'Angiv dit fulde navn.';
  }

  if (!trimmedStreet) {
    errors.streetAddress = 'Angiv vejnavn og nummer.';
  }

  if (!trimmedPostal) {
    errors.postalCode = 'Angiv postnummer.';
  } else if (!DK_POSTAL_CODE_PATTERN.test(trimmedPostal)) {
    errors.postalCode = 'Angiv et gyldigt dansk postnummer (4 cifre).';
  }

  if (!phone) {
    errors.phone = 'Angiv dit telefonnummer.';
  } else if (!PHONE_PATTERN.test(phone)) {
    errors.phone = 'Angiv et gyldigt telefonnummer.';
  }

  if (!email) {
    errors.email = 'Angiv din e-mailadresse.';
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Angiv en gyldig e-mailadresse.';
  }

  if (!values.subject) {
    errors.subject = 'Vælg et emne.';
  } else if (!CONTACT_FORM_SUBJECTS.some((option) => option.value === values.subject)) {
    errors.subject = 'Vælg et gyldigt emne.';
  }

  if (!description) {
    errors.description = 'Beskriv din henvendelse.';
  } else if (description.length < CONTACT_FORM_DESCRIPTION_MIN_LENGTH) {
    errors.description = `Beskrivelsen skal være mindst ${CONTACT_FORM_DESCRIPTION_MIN_LENGTH}.`;
  }

  if (!values.privacyAccepted) {
    errors.privacyAccepted = 'Du skal acceptere privatlivspolitikken.';
  }

  if (imageCount > MAX_CONTACT_FORM_IMAGES) {
    errors.description = `Maks. ${MAX_CONTACT_FORM_IMAGES} billeder.`;
  }

  return errors;
}

export function validateContactFormFiles(files: File[]): string | undefined {
  if (files.length > MAX_CONTACT_FORM_IMAGES) {
    return `Du kan vedhæfte højst ${MAX_CONTACT_FORM_IMAGES} billeder.`;
  }

  for (const file of files) {
    if (!ALLOWED_CONTACT_FORM_IMAGE_TYPES.includes(file.type as (typeof ALLOWED_CONTACT_FORM_IMAGE_TYPES)[number])) {
      return 'Billeder skal være JPEG, PNG eller WebP.';
    }

    if (file.size > MAX_CONTACT_FORM_IMAGE_BYTES) {
      return 'Hvert billede må højst fylde 2 MB.';
    }
  }

  return undefined;
}

export function contactFormIsValid(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length === 0;
}

export function isContactFormSubmittable(values: ContactFormValues, imageCount: number): boolean {
  return contactFormIsValid(validateContactForm(values, imageCount));
}
