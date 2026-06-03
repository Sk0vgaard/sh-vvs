import { type ContactFormValues } from './contact-form.types';

export type {
  ContactFormErrors,
  ContactFormField,
  ContactFormImagePayload,
  ContactFormSubmitPayload,
  ContactFormTextField,
  ContactFormValues,
} from './contact-form.types';

export const EMPTY_CONTACT_FORM_VALUES: ContactFormValues = {
  fullName: '',
  streetAddress: '',
  postalCode: '',
  phone: '',
  email: '',
  subject: '',
  description: '',
  privacyAccepted: false,
};

export const CONTACT_FORM_DESCRIPTION_MIN_LENGTH = 10;

export const MAX_CONTACT_FORM_IMAGES = 3;
export const MAX_CONTACT_FORM_IMAGE_BYTES = 2 * 1024 * 1024;
export const ALLOWED_CONTACT_FORM_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'] as const;
