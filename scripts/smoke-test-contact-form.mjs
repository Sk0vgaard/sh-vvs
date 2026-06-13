const DEFAULT_URL = 'https://sh-vvs-web.web.app/api/contact';
const MAX_ATTEMPTS = 5;
const RETRY_DELAY_MS = 2000;

const payload = {
  fullName: 'Deploy smoke test',
  streetAddress: 'Smoke Testvej 1',
  postalCode: '2791',
  phone: '30144514',
  email: 'smoke-test@shvvs.dk',
  subject: 'other',
  description: 'Automatisk smoke test efter deploy. Denne mail kan slettes.',
  privacyAccepted: true,
};

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runSmokeTest(url) {
  let lastError = 'Unknown error';

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      const body = await response.json().catch(() => null);

      if (response.ok && body?.ok === true) {
        console.log(`Contact form smoke test passed (${url}).`);
        return;
      }

      lastError = `HTTP ${response.status}: ${JSON.stringify(body)}`;
    } catch (error) {
      lastError = error instanceof Error ? error.message : String(error);
    }

    if (attempt < MAX_ATTEMPTS) {
      console.log(`Smoke test attempt ${attempt}/${MAX_ATTEMPTS} failed (${lastError}). Retrying…`);
      await sleep(RETRY_DELAY_MS);
    }
  }

  throw new Error(`Contact form smoke test failed after ${MAX_ATTEMPTS} attempts: ${lastError}`);
}

if (process.env.SKIP_CONTACT_SMOKE_TEST === '1') {
  console.log('Skipping contact form smoke test (SKIP_CONTACT_SMOKE_TEST=1).');
  process.exit(0);
}

const url = process.env.CONTACT_SMOKE_TEST_URL ?? DEFAULT_URL;
await runSmokeTest(url);
