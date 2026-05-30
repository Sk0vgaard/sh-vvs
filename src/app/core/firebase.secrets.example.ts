import { type FirebaseOptions } from 'firebase/app';

/**
 * Copy this file to `firebase.secrets.ts` and fill in your values.
 *
 *   npm run setup:firebase
 *
 * Or fetch config from Firebase CLI:
 *   npx firebase apps:sdkconfig WEB <APP_ID> --project <PROJECT_ID>
 */
export const firebaseSecrets: FirebaseOptions = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_PROJECT_ID.firebaseapp.com',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_PROJECT_ID.firebasestorage.app',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};
