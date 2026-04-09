import logo from '../../assets/images/logo.svg';
import { useI18n } from '../../i18n/useI18n';

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-[24px] font-semibold text-[var(--text-main)]">{title}</h3>
      <div className="mt-4 h-px w-10 bg-[var(--line)]" />
      <ul className="mt-5 space-y-3 text-[15px] text-[var(--muted)]">
        {links.map((link) => (
          <li key={link}>
            <a href="#home" className="transition hover:text-[var(--accent)]">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] py-18">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr_1fr_1fr]">
          <div>
            <img src={logo} alt="Sob Ready" className="w-[170px]" />
            <p className="mt-5 max-w-[260px] text-[16px] leading-8 text-[var(--muted)]">{t('footer.brandDescription')}</p>
            <div className="mt-5 flex items-center gap-3 text-[var(--muted)]">
              {['f', 'in', 'ig', 'be', 'dr'].map((item) => (
                <a key={item} href="#home" className="text-sm font-semibold uppercase transition hover:text-[var(--accent)]">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <FooterColumn title={t('footer.help')} links={t('footer.helpLinks')} />
          <FooterColumn title={t('footer.about')} links={t('footer.aboutLinks')} />
          <FooterColumn title={t('footer.categories')} links={t('footer.categoryLinks')} />
        </div>
        <div className="mt-14 flex flex-col gap-5 border-t border-[var(--border)] pt-6 text-[14px] text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>{t('footer.copyright')}</p>
          <div className="flex flex-wrap items-center gap-2">
            {['ApplePay', 'Amazon', 'GPay', 'Visa', 'MasterCard'].map((item) => (
              <span key={item} className="rounded border border-[var(--border)] px-2 py-1 text-[11px] text-[var(--text-main)]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
