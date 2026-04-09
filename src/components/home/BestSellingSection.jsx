import { useI18n } from '../../i18n/useI18n';
import { bestSellingProducts, bestSellingTabs } from '../../utils/siteData';
import { ProductCard } from '../shared/ProductCard';
import { SectionHeading } from '../shared/SectionHeading';

export function BestSellingSection() {
  const { t } = useI18n();

  return (
    <section className="bg-[var(--section)] py-16 lg:py-24">
      <div className="container">
        <SectionHeading title={t('sectionTitles.bestSelling')} />
        <div className="mt-5 flex flex-wrap items-center justify-center gap-6 text-[15px] text-[var(--muted)]">
          {bestSellingTabs.map((tab, index) => (
            <button
              key={tab}
              type="button"
              className={`${index === 0 ? 'font-semibold text-[var(--accent)] underline decoration-[var(--accent)] underline-offset-4' : 'hover:text-[var(--accent)]'}`}
            >
              {t(`categories.${tab}`)}
            </button>
          ))}
        </div>
        <div className="mt-9 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {bestSellingProducts.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
        <div className="mt-9 flex items-center justify-center gap-2">
          <button type="button" className="flex h-10 w-10 items-center justify-center border border-[var(--accent)] text-[22px] text-[var(--accent)]">
            ‹
          </button>
          <button type="button" className="flex h-10 w-10 items-center justify-center bg-[var(--accent)] text-[22px] text-white">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
