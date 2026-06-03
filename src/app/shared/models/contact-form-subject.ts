export const ContactFormSubject = {
  BathroomQuote: 'bathroom-quote',
  HeatingQuote: 'heating-quote',
  InstallationQuote: 'installation-quote',
  ServiceRepair: 'service-repair',
  Commercial: 'commercial',
  ServiceAgreement: 'service-agreement',
  Other: 'other',
} as const;

export type ContactFormSubject = (typeof ContactFormSubject)[keyof typeof ContactFormSubject];

export interface ContactFormSubjectOption {
  value: ContactFormSubject;
  label: string;
}
