import { useI18n } from '../../i18n/useI18n';

const languages = [
  { code: 'en', label: 'ENG' },
  { code: 'uz', label: 'UZ' },
];

export function TopBar({ theme, toggleTheme }) {
  const { language, setLanguage, t } = useI18n();

  return (
    <div className="border-b border-[var(--border)] bg-[var(--topbar)] text-[var(--muted)]">
      <div className="container flex flex-col gap-3 py-3 text-[12px] font-medium sm:flex-row sm:items-center sm:justify-between">
        <p>{t('topBarMessage')}</p>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--surface)] p-1 shadow-sm">
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => setLanguage(item.code)}
                className={`rounded-full px-3 py-1 transition ${language === item.code ? 'bg-[var(--accent)] text-white' : 'text-[var(--muted)] hover:text-[var(--text-main)]'}`}
                aria-label={`${t('language')}: ${item.label}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-[var(--text-main)] shadow-sm transition hover:border-[var(--accent)]"
            aria-label={t('theme')}
          >
            <span className="text-sm">{theme === 'light' ? '☾' : '☀'}</span>
            <span>{theme === 'light' ? t('dark') : t('light')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
