import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      very: {
        deeply: {
          nested: {
            key: 'here',
          },
        },
      },
      field: {
        createAt: 'Create At',
        email: 'Email',
        firstname: 'Firstname',
        lastname: 'Lastname',
        updateAt: 'Update At',
      },
      nested: {
        key: 'here',
      },
      'Welcome to React': 'Welcome to React and react-i18next 2',
    },
  },
  fr: {
    translation: {
      very: {
        deeply: {
          nested: {
            key: 'here',
          },
        },
      },
      field: {
        createAt: 'Create At',
        email: 'Email',
        firstname: 'Firstname',
        lastname: 'Lastname',
        updateAt: 'Update At',
      },
      nested: {
        key: 'here',
      },
      'Welcome to React': 'Bienvenue à React et react-i18next 2',
    },
  },
};

(i18n as any).use(initReactI18next).init({
  interpolation: {
    escapeValue: false,
  },
  // keySeparator: false,
  lng: 'en',
  fallbackLng: 'en',
  resources,
});

export default i18n;
