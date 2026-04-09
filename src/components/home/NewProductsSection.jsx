import { useI18n } from '../../i18n/useI18n';
import { newProducts } from '../../utils/siteData';
import { ProductCard } from '../shared/ProductCard';
import { SectionHeading } from '../shared/SectionHeading';

export function NewProductsSection() {
  const { t } = useI18n();

  return (
    <section id="products" className="bg-[var(--section)] pt-28 pb-16 lg:pt-56 lg:pb-24">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr] xl:grid-cols-[1fr_3.2fr]">
          <div className="overflow-hidden border border-[var(--card-border)] bg-[var(--surface)] p-4 shadow-[0_12px_28px_rgba(15,23,42,0.05)]">
            <div className="flex h-[290px] items-center justify-center rounded-[2px] bg-[linear-gradient(180deg,#fcfffb,#e8f6eb)] text-[150px]">🥗</div>
            <h3 className="mt-5 text-[21px] font-semibold text-[var(--text-main)]">{t('promo.freshVegetable')}</h3>
            <a href="#shop" className="mt-6 inline-flex bg-[var(--soft)] px-6 py-3 text-[14px] font-semibold text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-white">
              {t('promo.orderNow')}
            </a>
          </div>
          <div>
            <div className="mb-8 flex items-center justify-between gap-5">
              <SectionHeading title={t('sectionTitles.newProducts')} />
              <div className="hidden items-center gap-2 md:flex">
                <button type="button" className="flex h-10 w-10 items-center justify-center border border-[var(--accent)] text-[22px] text-[var(--accent)]">
                  ‹
                </button>
                <button type="button" className="flex h-10 w-10 items-center justify-center bg-[var(--accent)] text-[22px] text-white">
                  ›
                </button>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {newProducts.map((product) => (
                <ProductCard key={product.title} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
