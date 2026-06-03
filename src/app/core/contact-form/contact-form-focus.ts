import { type ContactFormErrors, type ContactFormField } from './contact-form.types';

export const CONTACT_FORM_FIELD_ORDER: readonly ContactFormField[] = [
  'fullName',
  'streetAddress',
  'postalCode',
  'phone',
  'email',
  'subject',
  'description',
  'privacyAccepted',
];

const FIELD_ELEMENT_IDS: Record<ContactFormField, string> = {
  fullName: 'contact-fullName',
  streetAddress: 'contact-streetAddress',
  postalCode: 'contact-postalCode',
  phone: 'contact-phone',
  email: 'contact-email',
  subject: 'contact-subject',
  description: 'contact-description',
  privacyAccepted: 'contact-privacyAccepted',
};

export function firstInvalidContactFormField(errors: ContactFormErrors): ContactFormField | undefined {
  return CONTACT_FORM_FIELD_ORDER.find((field) => Boolean(errors[field]));
}

export function focusContactFormField(field: ContactFormField): void {
  const elementId = FIELD_ELEMENT_IDS[field];

  requestAnimationFrame(() => {
    const element = document.getElementById(elementId);
    if (!(element instanceof HTMLElement)) {
      return;
    }

    element.focus();
    if (typeof element.scrollIntoView !== 'function') {
      return;
    }
    const prefersReducedMotion: boolean =
      typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'center' });
  });
}
