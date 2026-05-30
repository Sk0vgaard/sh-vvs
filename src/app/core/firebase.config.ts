import { type FirebaseOptions } from 'firebase/app';

/**
 * Replace with your project's config from Firebase Console → Project settings → Your apps,
 * or run: npx -y firebase-tools@latest apps:sdkconfig WEB <APP_ID>
 */
export const firebaseConfig: FirebaseOptions = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_PROJECT_ID.firebaseapp.com',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_PROJECT_ID.firebasestorage.app',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};
