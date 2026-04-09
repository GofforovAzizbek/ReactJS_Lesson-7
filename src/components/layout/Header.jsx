import { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import { navItems } from '../../utils/siteData';
import { useI18n } from '../../i18n/useI18n';
import { CartIcon, SearchIcon, UserIcon } from '../shared/Icons';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useI18n();

  return (
    <header className="border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="container relative py-5">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          <a href="#home" className="shrink-0">
            <img src={logo} alt="Sob Ready" className="h-auto w-[132px] sm:w-[145px]" />
          </a>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-[2px] border border-[var(--border)] text-[var(--text-main)] lg:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Toggle menu"
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>

          <div className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full z-20 flex-col gap-6 border-y border-[var(--border)] bg-[var(--surface)] px-4 py-6 shadow-lg lg:static lg:flex lg:flex-1 lg:flex-row lg:items-center lg:justify-between lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}>
            <nav>
              <ul className="flex flex-col gap-4 text-[15px] font-medium text-[var(--muted)] lg:flex-row lg:items-center lg:gap-8">
                {navItems.map((item, index) => (
                  <li key={item}>
                    <a
                      href="#home"
                      className={`transition hover:text-[var(--accent)] ${index === 0 ? 'text-[var(--accent)]' : ''}`}
                    >
                      {t(`nav.${item}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <label className="flex h-[50px] items-center overflow-hidden rounded-[2px] border border-[var(--border)] bg-[var(--soft)]">
                <input
                  type="text"
                  placeholder={t('searchPlaceholder')}
                  className="h-full w-full min-w-[220px] bg-transparent px-4 text-[15px] text-[var(--text-main)] outline-none placeholder:text-[var(--muted)]"
                />
                <button type="button" className="flex h-full w-[52px] items-center justify-center bg-[var(--accent)]">
                  <SearchIcon className="h-5 w-5 text-white" />
                </button>
              </label>
              <div className="flex items-center gap-3">
                {[UserIcon, CartIcon].map((Icon, index) => (
                  <button
                    key={index}
                    type="button"
                    className="flex h-[50px] w-[50px] items-center justify-center rounded-[2px] border border-[var(--border)] bg-[var(--soft)] text-[var(--accent)] transition hover:-translate-y-0.5 hover:shadow-md"
                    aria-label="Header action"
                  >
                    <Icon className="h-5 w-5" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
