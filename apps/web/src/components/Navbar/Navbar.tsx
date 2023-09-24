import type { JSX } from 'react';

import { useCallback, useContext, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '@/LanguageProvider';

enum Language {
  EN = 'en',
  FR = 'fr',
}

function Navbar(): JSX.Element {
  const { userLanguageChange, userLanguage } = useContext(LanguageContext);
  const { i18n } = useTranslation();

  const lang = useMemo(
    () => (userLanguage === Language.EN ? Language.FR : Language.EN),
    [userLanguage],
  );

  const handleLanguage = useCallback(() => {
    userLanguageChange(lang);
    i18n.changeLanguage(lang);
  }, [i18n, lang, userLanguageChange]);

  useEffect(() => {
    i18n.changeLanguage(userLanguage);
  }, [i18n, userLanguage]);

  return (
    <nav className="navbar flex">
      <div className="w-full">
        <div className="mr-2 flex justify-end">
          <button
            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200"
            onClick={handleLanguage}
            type="button">
            {userLanguage}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
