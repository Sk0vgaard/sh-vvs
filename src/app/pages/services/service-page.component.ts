import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { injectPageSeo } from '../../core/seo/page-seo';
import { AppHeaderContainer } from '../../layout/app-header/app-header.container';
import { COMPANY } from '../../shared/data/company/company.data';
import { CONTACT } from '../../shared/data/contact/contact.data';
import { pathForSectionId } from '../../shared/data/navigation/home-sections';
import { TRUST_CONTENT } from '../../shared/data/pricing/trust.content';
import { type ServicePage, servicePageBySlug } from '../../shared/data/services/service-pages.data';
import { SectionIds } from '../../shared/models/section-id';
import { FooterComponent } from '../../shared/ui/footer/footer.component';

export interface ServiceCopyPart {
  text: string;
  href?: string;
  routerLink?: string;
  external?: boolean;
}

const PHONE_DISPLAY = '30 14 45 14';
const COPY_SPLIT = /(TEKNIQs?|30 14 45 14|\b[Ss]kriv til os\b)/;

export function serviceCopyParts(text: string): ServiceCopyPart[] {
  return text
    .split(COPY_SPLIT)
    .filter((part) => part.length > 0)
    .map((part) => {
      if (part === 'TEKNIQ' || part === 'TEKNIQs') {
        return { text: part, href: TRUST_CONTENT.tekniqUrl, external: true };
      }
      if (part === PHONE_DISPLAY) {
        return { text: part, href: CONTACT.phoneHref };
      }
      if (part === 'Skriv til os' || part === 'skriv til os') {
        return { text: part, routerLink: pathForSectionId(SectionIds.Contact) };
      }
      return { text: part };
    });
}

@Component({
  selector: 'sh-service-page',
  imports: [AppHeaderContainer, FooterComponent, NgTemplateOutlet, RouterLink],
  templateUrl: './service-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicePageComponent {
  private readonly applyPageSeo = injectPageSeo();

  protected readonly contact = CONTACT;
  protected readonly company = COMPANY;
  protected readonly page = signal<ServicePage | undefined>(undefined);
  protected readonly copyParts = serviceCopyParts;

  constructor() {
    const route = inject(ActivatedRoute);
    const destroyRef = inject(DestroyRef);

    route.paramMap.pipe(takeUntilDestroyed(destroyRef)).subscribe((params) => {
      const nextPage = servicePageBySlug(params.get('slug'));
      this.page.set(nextPage);
      if (nextPage) {
        this.applyPageSeo({
          title: nextPage.documentTitle,
          description: nextPage.metaDescription,
          path: nextPage.path,
        });
      }
    });
  }
}
