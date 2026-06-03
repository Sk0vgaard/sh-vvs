import { firstInvalidContactFormField } from './contact-form-focus';
import { type ContactFormErrors } from './contact-form.types';

describe('firstInvalidContactFormField', () => {
  it('returns the first invalid field in form order', () => {
    const errors: ContactFormErrors = {
      email: 'Angiv en gyldig e-mailadresse.',
      fullName: 'Angiv dit fulde navn.',
      privacyAccepted: 'Du skal acceptere privatlivspolitikken.',
    };

    expect(firstInvalidContactFormField(errors)).toBe('fullName');
  });

  it('returns undefined when there are no errors', () => {
    expect(firstInvalidContactFormField({})).toBeUndefined();
  });
});
