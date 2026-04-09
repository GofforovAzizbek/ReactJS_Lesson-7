import { useI18n } from '../../i18n/useI18n';

function StoreBadge({ title, subtitle, dark = true }) {
  return (
    <button type="button" className={`inline-flex items-center gap-3 rounded-[6px] px-4 py-3 shadow-sm transition hover:-translate-y-0.5 ${dark ? 'bg-[#2f2f34] text-white' : 'bg-[var(--soft)] text-[var(--text-main)]'}`}>
      <span className="text-[28px]">{subtitle === 'Google Play' ? '▶' : ''}</span>
      <span className="text-left">
        <span className="block text-[10px] uppercase tracking-[0.08em] opacity-70">{title}</span>
        <span className="block text-[20px] font-semibold leading-none">{subtitle}</span>
      </span>
    </button>
  );
}

export function AppDownloadSection() {
  const { t } = useI18n();

  return (
    <section className="bg-[var(--surface)] py-18 lg:py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-[1fr_0.98fr]">
        <div className="max-w-[600px]">
          <h2 className="text-[44px] font-semibold leading-[1.22] tracking-[-0.03em] text-[var(--text-main)] sm:text-[56px]">{t('sectionTitles.app')}</h2>
          <p className="mt-6 max-w-[560px] text-[17px] leading-8 text-[var(--muted)]">{t('app.description')}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <StoreBadge title="Get it on" subtitle="Google Play" />
            <StoreBadge title="Download on the" subtitle="App Store" />
          </div>
        </div>
        <div className="relative mx-auto h-[400px] w-full max-w-[520px] sm:h-[500px]">
          <div className="absolute left-[6%] top-[8%] h-[78%] w-[38%] rotate-[-12deg] rounded-[18px] bg-[linear-gradient(180deg,#ffffff,#f4f4f6)] shadow-[0_18px_45px_rgba(15,23,42,0.08)]" />
          <div className="absolute right-[4%] top-[8%] h-[78%] w-[38%] rotate-[12deg] rounded-[18px] bg-[linear-gradient(180deg,#f4f4f8,#ececf2)] shadow-[0_18px_45px_rgba(15,23,42,0.08)]" />
          <div className="absolute left-1/2 top-0 z-10 h-[86%] w-[40%] -translate-x-1/2 rounded-[20px] bg-[linear-gradient(180deg,#ee1747,#df1f5d)] px-5 py-6 text-white shadow-[0_24px_50px_rgba(225,26,67,0.35)]">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">💬</div>
            <h3 className="mt-7 text-[28px] font-extrabold leading-[0.96]">Food for Everyone</h3>
            <div className="mt-10 flex justify-center gap-3">
              <span className="text-[84px]">🧑🏾‍🍳</span>
              <span className="mt-8 text-[68px]">🧔🏾</span>
            </div>
            <button type="button" className="absolute bottom-7 left-1/2 w-[76%] -translate-x-1/2 rounded-full bg-white px-5 py-3 text-[13px] font-semibold text-[var(--accent)] shadow-md">
              {t('app.getStarted')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
