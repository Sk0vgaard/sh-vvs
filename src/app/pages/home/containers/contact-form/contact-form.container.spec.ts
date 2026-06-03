import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import {
  ContactFormSubmissionGateway,
  type ContactFormSubmitResult,
} from '../../../../core/contact-form/contact-form-submission.gateway';
import { registerFaIconsForTesting } from '../../../../core/fontawesome.testing';
import { ContactFormSubject } from '../../../../shared/models/contact-form-subject';
import { ContactFormContainer } from './contact-form.container';

class MockGateway extends ContactFormSubmissionGateway {
  submit = vi
    .fn<ContactFormSubmissionGateway['submit']>()
    .mockResolvedValue({ ok: true } satisfies ContactFormSubmitResult);
}

describe('ContactFormContainer', () => {
  let gateway: MockGateway;

  beforeEach(async () => {
    gateway = new MockGateway();

    await TestBed.configureTestingModule({
      imports: [ContactFormContainer],
      providers: [provideRouter([]), { provide: ContactFormSubmissionGateway, useValue: gateway }],
    }).compileComponents();

    registerFaIconsForTesting();
  });

  it('does not submit when required fields are missing', async () => {
    const fixture = TestBed.createComponent(ContactFormContainer);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    await component['onSubmit']();
    fixture.detectChanges();
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

    expect(gateway.submit).not.toHaveBeenCalled();
    expect(component['errors']().fullName).toBeDefined();
    expect(component['showFieldErrors']()).toBe(true);
    expect(component['submitAttempted']()).toBe(true);
    expect(component['submitDisabled']()).toBe(true);

    const focused = document.activeElement as HTMLElement | null;
    expect(focused?.id).toBe('contact-fullName');
  });

  it('enables submit after validation when the form becomes valid', async () => {
    const fixture = TestBed.createComponent(ContactFormContainer);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    await component['onSubmit']();
    expect(component['submitDisabled']()).toBe(true);

    component['onFieldChange']({ field: 'fullName', value: 'Oliver Test' });
    component['onFieldChange']({ field: 'streetAddress', value: 'Testvej 1' });
    component['onFieldChange']({ field: 'postalCode', value: '2791' });
    component['onFieldChange']({ field: 'phone', value: '30144514' });
    component['onFieldChange']({ field: 'email', value: 'test@example.com' });
    component['onFieldChange']({ field: 'subject', value: ContactFormSubject.Other });
    component['onFieldChange']({ field: 'description', value: 'Jeg har brug for hjælp med VVS' });
    component['onFieldChange']({ field: 'privacyAccepted', value: true });
    fixture.detectChanges();

    expect(component['submitDisabled']()).toBe(false);
  });

  it('submits when form is valid', async () => {
    const fixture = TestBed.createComponent(ContactFormContainer);
    const component = fixture.componentInstance;

    component['onFieldChange']({ field: 'fullName', value: 'Oliver Test' });
    component['onFieldChange']({ field: 'streetAddress', value: 'Testvej 1' });
    component['onFieldChange']({ field: 'postalCode', value: '2791' });
    component['onFieldChange']({ field: 'phone', value: '30144514' });
    component['onFieldChange']({ field: 'email', value: 'test@example.com' });
    component['onFieldChange']({ field: 'subject', value: ContactFormSubject.Other });
    component['onFieldChange']({ field: 'description', value: 'Jeg har brug for hjælp med VVS' });
    component['onFieldChange']({ field: 'privacyAccepted', value: true });
    fixture.detectChanges();

    await component['onSubmit']();

    expect(gateway.submit).toHaveBeenCalledOnce();
  });
});
