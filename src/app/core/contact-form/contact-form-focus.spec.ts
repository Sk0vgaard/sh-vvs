import { signal } from '@angular/core';

import { ContactFormSubject } from '../../shared/models/contact-form-subject';
import { firstInvalidContactFormField } from './contact-form-focus';
import { createContactForm, createContactFormModel } from './contact-form.factory';
import { EMPTY_CONTACT_FORM_VALUES } from './contact-form.model';

describe('firstInvalidContactFormField', () => {
  it('returns the first invalid field in form order', () => {
    const model = createContactFormModel();
    const contactForm = createContactForm(model, signal(0));
    model.set({
      ...EMPTY_CONTACT_FORM_VALUES,
      fullName: '',
      email: 'not-an-email',
      privacyAccepted: false,
      subject: ContactFormSubject.Other,
    });

    expect(firstInvalidContactFormField(contactForm)).toBe('fullName');
  });

  it('returns undefined when the form is valid', () => {
    const model = createContactFormModel();
    const contactForm = createContactForm(model, signal(0));
    model.set({
      ...EMPTY_CONTACT_FORM_VALUES,
      fullName: 'Oliver Test',
      streetAddress: 'Testvej 1',
      postalCode: '2791',
      phone: '30144514',
      email: 'test@example.com',
      subject: ContactFormSubject.Other,
      description: 'Jeg har brug for hjælp med VVS',
      privacyAccepted: true,
    });

    expect(firstInvalidContactFormField(contactForm)).toBeUndefined();
  });
});
