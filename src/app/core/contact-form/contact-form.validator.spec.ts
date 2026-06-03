import { ContactFormSubject } from '../../shared/models/contact-form-subject';
import { EMPTY_CONTACT_FORM_VALUES } from './contact-form.model';
import {
  contactFormIsValid,
  isContactFormSubmittable,
  validateContactForm,
  validateContactFormFiles,
} from './contact-form.validator';

describe('validateContactForm', () => {
  const valid = {
    ...EMPTY_CONTACT_FORM_VALUES,
    fullName: 'Oliver Test',
    streetAddress: 'Testvej 1',
    postalCode: '2791',
    phone: '30144514',
    email: 'test@example.com',
    subject: ContactFormSubject.BathroomQuote,
    description: 'Jeg vil have tilbud på badeværelse',
    privacyAccepted: true,
  };

  it('returns no errors for valid values', () => {
    const errors = validateContactForm(valid, 0);

    expect(contactFormIsValid(errors)).toBe(true);
    expect(isContactFormSubmittable(valid, 0)).toBe(true);
  });

  it('requires street and postal code', () => {
    const errors = validateContactForm({ ...valid, streetAddress: '', postalCode: '' }, 0);

    expect(errors.streetAddress).toBeDefined();
    expect(errors.postalCode).toBeDefined();
    expect(isContactFormSubmittable({ ...valid, streetAddress: '', postalCode: '' }, 0)).toBe(false);
  });

  it('rejects invalid postal code', () => {
    const errors = validateContactForm({ ...valid, postalCode: '12' }, 0);

    expect(errors.postalCode).toContain('postnummer');
  });

  it('requires privacy acceptance', () => {
    const errors = validateContactForm({ ...valid, privacyAccepted: false }, 0);

    expect(errors.privacyAccepted).toBeDefined();
    expect(isContactFormSubmittable({ ...valid, privacyAccepted: false }, 0)).toBe(false);
  });
});

describe('validateContactFormFiles', () => {
  it('rejects unsupported mime types', () => {
    const file = new File(['x'], 'a.pdf', { type: 'application/pdf' });

    expect(validateContactFormFiles([file])).toContain('JPEG');
  });
});
