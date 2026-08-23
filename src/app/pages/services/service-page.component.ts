import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { injectPageSeo } from '../../core/seo/page-seo';
import { AppHeaderContainer } from '../../layout/app-header/app-header.container';
import { COMPANY } from '../../shared/data/company/company.data';
import { CONTACT } from '../../shared/data/contact/contact.data';
import { type ServicePage, servicePageBySlug } from '../../shared/data/services/service-pages.data';
import { FooterComponent } from '../../shared/ui/footer/footer.component';

@Component({
  selector: 'sh-service-page',
  imports: [AppHeaderContainer, FooterComponent, RouterLink],
  templateUrl: './service-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicePageComponent {
  private readonly applyPageSeo = injectPageSeo();

  protected readonly contact = CONTACT;
  protected readonly company = COMPANY;
  protected readonly page = signal<ServicePage | undefined>(undefined);

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
