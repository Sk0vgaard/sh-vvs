import { type ContactFormSubmitPayload } from './contact-form.model';

export type ContactFormSubmitResult = { ok: true } | { ok: false; message: string };

export abstract class ContactFormSubmissionGateway {
  abstract submit(payload: ContactFormSubmitPayload): Promise<ContactFormSubmitResult>;
}

export class HttpContactFormSubmissionGateway extends ContactFormSubmissionGateway {
  constructor(private readonly apiUrl: string) {
    super();
  }

  async submit(payload: ContactFormSubmitPayload): Promise<ContactFormSubmitResult> {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { message?: string } | null;
        return { ok: false, message: body?.message ?? 'Kunne ikke sende formularen.' };
      }

      return { ok: true };
    } catch {
      return { ok: false, message: 'Kunne ikke sende formularen. Tjek din forbindelse.' };
    }
  }
}

export class NoopContactFormSubmissionGateway extends ContactFormSubmissionGateway {
  async submit(): Promise<ContactFormSubmitResult> {
    return { ok: false, message: 'Kontaktformular er ikke konfigureret endnu.' };
  }
}
