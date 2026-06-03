import { signal } from '@angular/core';

import { ContactFormSubject } from '../../shared/models/contact-form-subject';
import { createContactForm, createContactFormModel } from './contact-form.factory';
import { EMPTY_CONTACT_FORM_VALUES } from './contact-form.model';
import { validateContactFormFiles } from './contact-form.validator';

describe('contactFormSchema', () => {
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

  function createForm(imageCount = 0) {
    const model = createContactFormModel();
    const contactForm = createContactForm(model, signal(imageCount));
    return { model, contactForm };
  }

  it('is valid for valid values', () => {
    const { model, contactForm } = createForm();
    model.set(valid);

    expect(contactForm().valid()).toBe(true);
  });

  it('requires street and postal code', () => {
    const { model, contactForm } = createForm();
    model.set({ ...valid, streetAddress: '', postalCode: '' });

    expect(contactForm().invalid()).toBe(true);
    expect(contactForm.streetAddress().invalid()).toBe(true);
    expect(contactForm.postalCode().invalid()).toBe(true);
  });

  it('rejects invalid postal code', () => {
    const { model, contactForm } = createForm();
    model.set({ ...valid, postalCode: '12' });

    expect(contactForm.postalCode().errors()[0]?.message).toContain('postnummer');
  });

  it('requires privacy acceptance', () => {
    const { model, contactForm } = createForm();
    model.set({ ...valid, privacyAccepted: false });

    expect(contactForm().invalid()).toBe(true);
    expect(contactForm.privacyAccepted().invalid()).toBe(true);
  });
});

describe('validateContactFormFiles', () => {
  it('rejects unsupported mime types', () => {
    const file = new File(['x'], 'a.pdf', { type: 'application/pdf' });

    expect(validateContactFormFiles([file])).toContain('JPEG');
  });
});
