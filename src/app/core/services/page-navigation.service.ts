import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

import { pathForSectionId } from '../../shared/data/navigation/home-sections';
import { type ScrollSectionId } from '../../shared/models/section-id';

@Injectable({ providedIn: 'root' })
export class PageNavigationService {
  private static readonly SECTION_SCROLL_FRAMES = 120;
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  public scrollToTop(): void {
    if (!this.isBrowser) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }

  public scrollToSection(sectionId: ScrollSectionId): void {
    if (!this.isBrowser) {
      return;
    }

    const tryScroll = (remaining: number): void => {
      const target = document.getElementById(sectionId);
      if (target) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
        return;
      }

      if (remaining > 0) {
        requestAnimationFrame(() => tryScroll(remaining - 1));
      }
    };

    tryScroll(PageNavigationService.SECTION_SCROLL_FRAMES);
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
