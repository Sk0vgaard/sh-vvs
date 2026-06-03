export interface PrivacyPolicySection {
  heading: string;
  paragraphs: string[];
}

export const PRIVACY_POLICY_STUB_TITLE = 'Privatlivspolitik';

export const PRIVACY_POLICY_STUB_NOTICE =
  'Den endelige privatlivspolitik leveres af Skovgaard & Heide VVS ApS og erstatter denne midlertidige tekst.';

export const PRIVACY_POLICY_STUB_SECTIONS: PrivacyPolicySection[] = [
  {
    heading: 'Hvad vi indsamler',
    paragraphs: [
      'Via kontaktformularen kan vi modtage navn, adresse, telefonnummer, e-mail, emne, beskrivelse af opgaven og eventuelle billeder du vedhæfter.',
    ],
  },
  {
    heading: 'Formål',
    paragraphs: [
      'Oplysningerne bruges til at behandle din henvendelse, give tilbud og registrere kundedata i vores ordresystem (Ordrestyring).',
    ],
  },
  {
    heading: 'Opbevaring og dine rettigheder',
    paragraphs: [
      'Vi opbevarer data så længe det er nødvendigt for at håndtere henvendelsen og opfylde lovkrav. Kontakt os på kontakt@shvvs.dk for indsigt, rettelse eller sletning.',
    ],
  },
];
