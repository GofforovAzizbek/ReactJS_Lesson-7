import { useI18n } from '../../i18n/useI18n';
import { countdown, marketProducts } from '../../utils/siteData';
import { SectionHeading } from '../shared/SectionHeading';

function DealCard() {
  const { t } = useI18n();

  return (
    <article className="border border-[var(--card-border)] bg-[var(--surface)] p-3 shadow-[0_12px_28px_rgba(15,23,42,0.05)]">
      <div className="flex h-[250px] items-center justify-center rounded-[2px] bg-[linear-gradient(180deg,#f7f7f7,#fffdf7)] text-[140px]">☕</div>
      <div className="mt-4 grid grid-cols-4 gap-2">
        {countdown.map((item) => (
          <div key={item.key} className="bg-[var(--soft)] px-2 py-3 text-center">
            <div className="text-[22px] font-semibold text-[var(--accent)]">{item.value}</div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.08em] text-[var(--muted)]">{t(`deal.${item.key}`)}</div>
          </div>
        ))}
      </div>
      <h3 className="mt-5 text-[18px] font-semibold text-[var(--text-main)]">{t('deal.title')}</h3>
      <p className="mt-3 max-w-[240px] text-[15px] leading-7 text-[var(--muted)]">{t('deal.description')}</p>
      <div className="mt-4 flex items-center gap-3">
        <span className="text-[20px] text-[var(--muted)] line-through">$25.00</span>
        <span className="text-[36px] font-bold leading-none text-[var(--accent)]">$20.00</span>
      </div>
      <div className="mt-6 flex items-center gap-2">
        <button type="button" className="flex flex-1 items-center justify-center gap-2 bg-[var(--accent)] px-4 py-4 text-[14px] font-semibold text-white transition hover:bg-[var(--accent-strong)]">
          <span>⊕</span>
          {t('deal.addToBag')}
        </button>
        <button type="button" className="flex h-[52px] w-[52px] items-center justify-center border border-[var(--accent)] text-[24px] text-[var(--accent)]">
          +
        </button>
      </div>
    </article>
  );
}

function MarketRow({ item }) {
  const { t } = useI18n();

  return (
    <article className="grid grid-cols-[88px_1fr] items-center gap-4 border border-[var(--card-border)] bg-[var(--surface)] p-3 shadow-[0_8px_20px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5">
      <div className="flex h-[88px] items-center justify-center rounded-[2px] bg-[linear-gradient(135deg,#fff7f8,#fff)] text-[54px]">{item.emoji}</div>
      <div>
        <h3 className="text-[15px] font-semibold text-[var(--text-main)]">{item.title}</h3>
        <div className="mt-1 flex items-center gap-3 text-[15px]">
          <span className="text-[var(--muted)] line-through">{item.old}</span>
          <span className="font-bold text-[var(--accent)]">{item.price}</span>
        </div>
        <div className="mt-3 flex items-center justify-between gap-2">
          <button type="button" className="border border-[var(--accent)] px-4 py-2 text-[13px] font-semibold text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-white">
            {t('deal.buyNow')}
          </button>
          <div className="text-[12px] text-[var(--accent)]">★★★★ <span className="text-[var(--muted)]">{item.rating}</span></div>
        </div>
      </div>
    </article>
  );
}

export function DealsSection() {
  const { t } = useI18n();

  return (
    <section className="bg-[var(--section)] py-16 lg:py-24">
      <div className="container grid gap-8 xl:grid-cols-[320px_1fr]">
        <DealCard />
        <div>
          <div className="mb-6 flex flex-col items-center justify-between gap-5 sm:flex-row">
            <SectionHeading title={t('sectionTitles.bestSellingCompact')} centered={false} />
            <div className="flex flex-wrap items-center gap-5 text-[15px] text-[var(--muted)]">
              {['fruits', 'vegetables', 'meal', 'milk', 'cakes', 'drinks'].map((tab, index) => (
                <button
                  key={tab}
                  type="button"
                  className={`${index === 0 ? 'font-semibold text-[var(--accent)] underline decoration-[var(--accent)] underline-offset-4' : 'hover:text-[var(--accent)]'}`}
                >
                  {t(`categories.${tab}`)}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {marketProducts.map((item) => (
              <MarketRow key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
