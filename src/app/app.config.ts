import { type ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideContactForm } from './core/contact-form/provide-contact-form';
import { provideFontAwesome } from './core/fontawesome';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes), provideFontAwesome(), provideContactForm()],
};
