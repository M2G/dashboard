import type { JSX } from 'react';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Navbar(): JSX.Element {
  const { i18n } = useTranslation();
  const [state, setState] = useState<boolean>(false);
  return (
    <nav className="navbar flex">
      <div className="container">
        <div className="mr-2 flex justify-end">
          <button
            onClick={() => {
              setState(!state);
              if (state) return i18n?.changeLanguage('fr');
              i18n?.changeLanguage('en');
            }}
            className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200"
            type="button">
            {i18n.language}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
