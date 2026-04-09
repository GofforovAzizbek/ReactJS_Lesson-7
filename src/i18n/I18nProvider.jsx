import { useMemo, useState } from 'react';
import { I18nContext } from './I18nContext';
import { translations } from './translations';

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en');

  const value = useMemo(() => {
    const dictionary = translations[language] || translations.en;

    const t = (path) =>
      path.split('.').reduce((result, key) => {
        if (result && key in result) {
          return result[key];
        }
        return path;
      }, dictionary);

    return {
      language,
      setLanguage: (nextLanguage) => {
        localStorage.setItem('language', nextLanguage);
        setLanguage(nextLanguage);
      },
      t,
    };
  }, [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
