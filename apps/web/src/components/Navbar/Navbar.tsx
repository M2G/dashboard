import type { JSX } from 'react';

import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

enum Language {
  EN = 'en',
  FR = 'fr',
}

function Navbar(): JSX.Element {
  const { i18n } = useTranslation();
  const handleLanguage = useCallback(() => {
    i18n.language === Language.EN
      ? i18n.changeLanguage(Language.FR)
      : i18n.changeLanguage(Language.EN);
  }, [i18n]);

  return (
    <nav className="navbar flex">
      <div className="w-full">
        <div className="mr-2 flex justify-end">
          <button
            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200"
            onClick={handleLanguage}
            type="button">
            {i18n.language}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
