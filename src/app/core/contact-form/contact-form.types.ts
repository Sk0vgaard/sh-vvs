import { type ContactFormSubject } from '../../shared/models/contact-form-subject';

export interface ContactFormValues {
  fullName: string;
  streetAddress: string;
  postalCode: string;
  phone: string;
  email: string;
  subject: ContactFormSubject | '';
  description: string;
  privacyAccepted: boolean;
}

export type ContactFormTextField = 'fullName' | 'streetAddress' | 'postalCode' | 'phone' | 'email' | 'description';

export type ContactFormField = ContactFormTextField | 'subject' | 'privacyAccepted';

export interface ContactFormImagePayload {
  name: string;
  type: string;
  dataBase64: string;
}

export interface ContactFormSubmitPayload {
  fullName: string;
  streetAddress: string;
  postalCode: string;
  phone: string;
  email: string;
  subject: ContactFormSubject;
  description: string;
  privacyAccepted: true;
  images: ContactFormImagePayload[];
}
