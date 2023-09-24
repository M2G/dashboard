import { createContext, ReactNode, useMemo, useState } from 'react';

export const LanguageContext = createContext({
  userLanguage: 'en',
});

export enum languageOptions {
  en = 'en',
  fr = 'fr',
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const defaultLanguage = window.localStorage.getItem('rcml-lang');

  console.log('defaultLanguage defaultLanguage defaultLanguage', defaultLanguage);

  const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'en');

  console.log('userLanguage userLanguage userLanguage', userLanguage);

  const provider = {
    userLanguage,
    userLanguageChange: (selected: string | number) => {
      const newLanguage = languageOptions[selected] ? selected : 'en';
      console.log('userLanguageChange userLanguageChange userLanguageChange', {
        newLanguage: languageOptions[selected],
        selected,
      });
      setUserLanguage(newLanguage);
      window.localStorage.setItem('rcml-lang', newLanguage);
    },
  };

  const value = useMemo(() => provider, [provider]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
