import { Injectable } from '@angular/core';

import { type ScrollSectionId } from '../../shared/models/section-id';

@Injectable({ providedIn: 'root' })
export class PageNavigationService {
  public scrollToTop(): void {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }

  public scrollToSection(sectionId: ScrollSectionId): void {
    requestAnimationFrame(() => {
      const target = document.getElementById(sectionId);
      if (!target) {
        return;
      }

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
    });
  }
}
