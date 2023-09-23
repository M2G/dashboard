import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      alert: {
        warning: 'Warning, you are about to perform an irreversible action',
      },
      field: {
        createdAt: 'Created at',
        email: 'Email',
        firstname: 'First name',
        lastname: 'Last name',
        updateAt: 'Update at',
      },
      form: {
        createAccount: 'Create account',
        forgotPassword: 'Forgot password',
        pleaseAuthenticate: 'Please authenticate',
        changePassword: 'Change Password',
        resetPassword: 'Reset password',
        toContinue: 'to continue',
        userProfile: 'User Profile',
        save: 'Save',
        signup: 'Signup',
        haveAnAccount: 'Have an account ?',
        signin: 'Signin',
        home: 'Home',
        submit: 'Submit',
        profile: 'Profile',
      },
      navbar: {
        home: 'Home',
        profil: 'Profil',
        users: 'Users',
      },
    },
  },
  fr: {
    translation: {
      alert: {
        warning: "Attention, vous êtes sur le point d'effectuer une action irréversible",
      },
      field: {
        createdAt: 'Créé à',
        email: 'Email',
        firstname: 'Prénom',
        lastname: 'Nom de famille',
        updateAt: 'Mise à jour à',
      },
      form: {
        createAccount: 'Créer un compte',
        forgotPassword: 'Mot de passe oublié',
        pleaseAuthenticate: 'Veuillez vous authentifier',
        resetPassword: 'Réinitialiser le mot de passe',
        toContinue: 'Continuer',
        userProfile: "Profil de l'utilisateur",
        save: 'Sauvegarder',
        signup: 'Signup',
        haveAnAccount: 'Vous avez un compte ?',
        signin: 'Signin',
        home: 'Home',
        submit: 'Soumettre',
        profile: 'Profile',
      },
      navbar: {
        home: 'Accueil',
        profil: 'Profil',
        users: 'Utilisateurs',
      },
    },
  },
};

(i18n as any).use(initReactI18next).init({
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  // keySeparator: false,
  lng: 'en',
  resources,
});

export default i18n;
