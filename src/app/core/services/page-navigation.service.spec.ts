import { TestBed } from '@angular/core/testing';

import { SectionIds } from '../../shared/models/section-id';
import { PageNavigationService } from './page-navigation.service';

function mockMatchMedia(reducedMotion: boolean): void {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: reducedMotion,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
}

describe('PageNavigationService', () => {
  let service: PageNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageNavigationService);
    window.scrollTo = vi.fn();
    mockMatchMedia(false);
  });

  it('scrolls to top', () => {
    service.scrollToTop();

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('scrolls to a section by id', async () => {
    const target = document.createElement('section');
    target.id = SectionIds.Services;
    document.body.appendChild(target);
    const scrollIntoView = vi.fn();
    target.scrollIntoView = scrollIntoView;

    service.scrollToSection(SectionIds.Services);
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });

    target.remove();
  });

  it('uses instant scroll when reduced motion is preferred', () => {
    mockMatchMedia(true);

    service.scrollToTop();

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'auto' });
  });
});
