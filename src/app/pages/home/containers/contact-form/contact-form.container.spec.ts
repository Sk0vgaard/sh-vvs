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

function fillValidForm(component: ContactFormContainer): void {
  component['contactForm'].fullName().value.set('Oliver Test');
  component['contactForm'].streetAddress().value.set('Testvej 1');
  component['contactForm'].postalCode().value.set('2791');
  component['contactForm'].phone().value.set('30144514');
  component['contactForm'].email().value.set('test@example.com');
  component['contactForm'].subject().value.set(ContactFormSubject.Other);
  component['contactForm'].description().value.set('Jeg har brug for hjælp med VVS');
  component['contactForm'].privacyAccepted().value.set(true);
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

    component['onSubmit'](new Event('submit'));
    fixture.detectChanges();
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

    expect(gateway.submit).not.toHaveBeenCalled();
    expect(component['contactForm']().invalid()).toBe(true);
    expect(component['submitAttempted']()).toBe(true);
    expect(component['submitDisabled']()).toBe(true);

    const focused = document.activeElement as HTMLElement | null;
    expect(focused?.id).toBe('contact-fullName');
  });

  it('enables submit after validation when the form becomes valid', async () => {
    const fixture = TestBed.createComponent(ContactFormContainer);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    component['onSubmit'](new Event('submit'));
    expect(component['submitDisabled']()).toBe(true);

    fillValidForm(component);
    fixture.detectChanges();

    expect(component['submitDisabled']()).toBe(false);
  });

  it('submits when form is valid', async () => {
    const fixture = TestBed.createComponent(ContactFormContainer);
    const component = fixture.componentInstance;

    fillValidForm(component);
    fixture.detectChanges();

    component['onSubmit'](new Event('submit'));
    await fixture.whenStable();

    expect(gateway.submit).toHaveBeenCalledOnce();
  });
});
