import { type EnvironmentProviders, isDevMode, makeEnvironmentProviders } from '@angular/core';

import { firebaseConfig } from '../firebase.config';
import {
  ContactFormSubmissionGateway,
  HttpContactFormSubmissionGateway,
  NoopContactFormSubmissionGateway,
} from './contact-form-submission.gateway';

function contactFormApiUrl(): string {
  if (isDevMode()) {
    const projectId = firebaseConfig.projectId;
    if (projectId && projectId !== 'YOUR_PROJECT_ID') {
      return `http://127.0.0.1:5001/${projectId}/europe-west1/submitContact`;
    }
  }

  return '/api/contact';
}

export function provideContactForm(): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: ContactFormSubmissionGateway,
      useFactory: () => {
        const url = contactFormApiUrl();
        if (url.includes('YOUR_PROJECT_ID')) {
          return new NoopContactFormSubmissionGateway();
        }

        return new HttpContactFormSubmissionGateway(url);
      },
    },
  ]);
}
