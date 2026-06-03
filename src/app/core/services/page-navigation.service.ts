import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { pathForSectionId } from '../../shared/data/navigation/home-sections';
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

  /** Updates the URL and scrolls; re-scrolls when the section URL is already active. */
  public navigateToHomeSection(router: Router, sectionId: ScrollSectionId): void {
    const path = pathForSectionId(sectionId);
    const currentPath = router.url.split('?')[0];

    if (currentPath === path) {
      this.scrollToSection(sectionId);
      return;
    }

    void router.navigateByUrl(path);
  }
}
