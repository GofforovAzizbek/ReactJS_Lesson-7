import { useI18n } from '../../i18n/useI18n';

export function SpecialServiceSection() {
  const { t } = useI18n();

  return (
    <section className="overflow-hidden bg-[var(--surface)] py-16 lg:py-24">
      <div className="container relative">
        <div className="absolute left-[-10%] top-1/2 hidden h-[220px] w-[120%] -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.11)_0,transparent_60%)] lg:block" />
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative mx-auto grid max-w-[420px] grid-cols-2 gap-4">
            <div className="rounded-[30px] rounded-br-[8px] bg-[linear-gradient(135deg,#432818,#151515)] p-4 text-[120px] shadow-[0_18px_45px_rgba(15,23,42,0.16)]">🍲</div>
            <div className="mt-12 rounded-[30px] rounded-tl-[8px] bg-[linear-gradient(135deg,#f7caca,#f76f6f)] p-4 text-[120px] shadow-[0_18px_45px_rgba(15,23,42,0.12)]">🥩</div>
            <div className="-mt-6 ml-12 rounded-[30px] rounded-tr-[8px] bg-[linear-gradient(135deg,#4a2a21,#1f1f1f)] p-4 text-[120px] shadow-[0_18px_45px_rgba(15,23,42,0.16)]">🍖</div>
            <div className="absolute left-1/2 top-1/2 flex h-[98px] w-[98px] -translate-x-1/2 -translate-y-1/2 rotate-45 items-center justify-center bg-[var(--surface)] shadow-[0_12px_28px_rgba(15,23,42,0.08)]">
              <div className="-rotate-45 text-center text-[14px] font-semibold text-[var(--accent)]">Free Delivery</div>
            </div>
          </div>
          <div className="relative z-10 max-w-[560px]">
            <h2 className="text-[48px] font-semibold leading-[1.18] tracking-[-0.03em] text-[var(--text-main)] sm:text-[58px]">
              {t('promo.serviceTitle').replace('Fresh Beef', '')}
              <span className="relative inline-block text-[var(--pink)]">
                {' '}Fresh Beef
                <span className="absolute bottom-2 left-0 -z-10 h-4 w-full bg-[var(--highlight)]" />
              </span>
            </h2>
            <div className="mt-8 flex items-center gap-3 text-[24px] font-semibold text-[var(--text-main)]">
              <span className="text-[var(--muted)] line-through">$20.00</span>
              <span>$18.00</span>
            </div>
            <a href="#shop" className="mt-8 inline-flex border border-[var(--accent)] px-7 py-4 text-[14px] font-semibold uppercase tracking-[0.04em] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-white">
              {t('promo.shopNow')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
