import { initializeApp } from 'firebase-admin/app';
import { onRequest } from 'firebase-functions/v2/https';
import nodemailer from 'nodemailer';

initializeApp();

interface ContactImagePayload {
  name: string;
  type: string;
  dataBase64: string;
}

interface ContactPayload {
  fullName: string;
  streetAddress: string;
  postalCode: string;
  phone: string;
  email: string;
  subject: string;
  description: string;
  privacyAccepted: boolean;
  images?: ContactImagePayload[];
}

const SUBJECT_LABELS: Record<string, string> = {
  'bathroom-quote': 'Tilbud — badeværelse',
  'heating-quote': 'Tilbud — varme / fjernvarme',
  'installation-quote': 'Tilbud — VVS-installation',
  'service-repair': 'Service & reparation',
  commercial: 'Erhverv / større projekt',
  'service-agreement': 'Serviceaftale',
  other: 'Andet',
};

function validatePayload(body: unknown): ContactPayload | string {
  if (!body || typeof body !== 'object') {
    return 'Ugyldig forespørgsel.';
  }

  const data = body as ContactPayload;
  if (
    !data.fullName?.trim() ||
    !data.streetAddress?.trim() ||
    !data.postalCode?.trim() ||
    !data.phone?.trim() ||
    !data.email?.trim()
  ) {
    return 'Manglende kontaktoplysninger.';
  }

  if (!/^\d{4}$/.test(data.postalCode.trim())) {
    return 'Ugyldigt postnummer.';
  }

  if (!data.subject || !SUBJECT_LABELS[data.subject]) {
    return 'Ugyldigt emne.';
  }

  if (!data.description?.trim() || data.description.trim().length < 10) {
    return 'Beskrivelse er for kort.';
  }

  if (data.privacyAccepted !== true) {
    return 'Privatlivspolitik skal accepteres.';
  }

  if (data.images && data.images.length > 3) {
    return 'For mange billeder.';
  }

  return data;
}

export const submitContact = onRequest({ region: 'europe-west1', cors: true, maxInstances: 10 }, async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const validated = validatePayload(req.body);
  if (typeof validated === 'string') {
    res.status(400).json({ message: validated });
    return;
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const mailTo = process.env.CONTACT_TO_EMAIL ?? 'kontakt@shvvs.dk';
  const mailFrom = process.env.CONTACT_FROM_EMAIL ?? smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass || !mailFrom) {
    console.error('SMTP not configured');
    res.status(503).json({ message: 'Mail er ikke konfigureret endnu.' });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user: smtpUser, pass: smtpPass },
  });

  const subjectLabel = SUBJECT_LABELS[validated.subject] ?? validated.subject;
  const text = [
    `Ny henvendelse fra shvvs.dk`,
    '',
    `Navn: ${validated.fullName}`,
    `Vejnavn: ${validated.streetAddress}`,
    `Postnummer: ${validated.postalCode}`,
    `Telefon: ${validated.phone}`,
    `E-mail: ${validated.email}`,
    `Emne: ${subjectLabel}`,
    '',
    'Beskrivelse:',
    validated.description,
  ].join('\n');

  const attachments =
    validated.images?.map((image) => ({
      filename: image.name,
      content: Buffer.from(image.dataBase64, 'base64'),
      contentType: image.type,
    })) ?? [];

  try {
    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: validated.email,
      subject: `[SH-VVS] ${subjectLabel} — ${validated.fullName}`,
      text,
      attachments,
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Failed to send contact email', error);
    res.status(500).json({ message: 'Kunne ikke sende e-mail.' });
  }
});
