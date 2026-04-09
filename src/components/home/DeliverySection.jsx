import { useI18n } from '../../i18n/useI18n';

export function DeliverySection() {
  const { t } = useI18n();

  return (
    <section className="bg-[var(--surface)] py-16 lg:py-24">
      <div className="container grid items-center gap-10 lg:grid-cols-[1fr_1.02fr]">
        <div className="relative overflow-hidden border border-[var(--card-border)] bg-[linear-gradient(135deg,#f4f0e6,#ffffff)] p-4 shadow-[0_12px_28px_rgba(15,23,42,0.05)]">
          <div className="flex min-h-[280px] items-center justify-center rounded-[2px] bg-[radial-gradient(circle_at_top,rgba(246,214,122,0.22),transparent_55%),linear-gradient(135deg,#e4e7d6,#fbfbfa)] text-[190px]">
            🥩
          </div>
        </div>
        <div className="max-w-[590px]">
          <h2 className="text-[44px] font-semibold leading-[1.22] tracking-[-0.03em] text-[var(--text-main)] sm:text-[58px]">
            {t('promo.deliveryTitle').replace('Delivery', '')}
            <span className="relative inline-block text-[var(--pink)]">
              Delivery
              <span className="absolute bottom-2 left-0 -z-10 h-4 w-full bg-[var(--highlight)]" />
            </span>
          </h2>
          <p className="mt-6 max-w-[560px] text-[17px] leading-8 text-[var(--muted)]">{t('promo.deliveryDescription')}</p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            {[t('promo.featureOne'), t('promo.featureTwo')].map((item) => (
              <div key={item} className="flex items-center gap-2 text-[16px] text-[var(--muted)]">
                <span className="text-[var(--text-main)]">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <a href="#shop" className="mt-8 inline-flex border border-[var(--accent)] px-7 py-4 text-[14px] font-semibold text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-white">
            {t('promo.findNow')}
          </a>
        </div>
      </div>
    </section>
  );
}
