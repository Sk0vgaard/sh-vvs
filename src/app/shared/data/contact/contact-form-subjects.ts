import { ContactFormSubject, type ContactFormSubjectOption } from '../../models/contact-form-subject';

export const CONTACT_FORM_SUBJECTS: ContactFormSubjectOption[] = [
  { value: ContactFormSubject.BathroomQuote, label: 'Tilbud — badeværelse' },
  { value: ContactFormSubject.HeatingQuote, label: 'Tilbud — varme / fjernvarme' },
  { value: ContactFormSubject.InstallationQuote, label: 'Tilbud — VVS-installation' },
  { value: ContactFormSubject.ServiceRepair, label: 'Service & reparation' },
  { value: ContactFormSubject.Commercial, label: 'Erhverv / større projekt' },
  { value: ContactFormSubject.ServiceAgreement, label: 'Serviceaftale' },
  { value: ContactFormSubject.Other, label: 'Andet' },
];
