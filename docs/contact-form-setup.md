# Contact form (Firebase Function)

The contact form posts JSON to `/api/contact` in production (Firebase Hosting rewrite) or the Functions emulator in local dev.

## Configure SMTP

Set environment variables for the `submitContact` function (Firebase console → Functions → Environment variables, or `functions/.env` for emulators):

- `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`
- `CONTACT_TO_EMAIL` (default: kontakt@shvvs.dk)
- `CONTACT_FROM_EMAIL`

See `functions/.env.example`.

## Local emulator

```bash
cd functions && npm install && npm run build
firebase emulators:start --only functions
```

With a valid `firebase.secrets.ts` project id, `ng serve` targets `http://127.0.0.1:5001/<projectId>/europe-west1/submitContact`.

## Deploy

```bash
cd functions && npm install && npm run build
firebase deploy --only functions:submitContact,hosting
```
