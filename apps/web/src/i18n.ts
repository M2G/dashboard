import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

//@TODO to json file
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
        password: 'Password',
        lastname: 'Last name',
        updateAt: 'Update at',
        newPassword: 'New password',
        verifyPassword: 'Verify password',
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
        wantToSeeYour: 'Want to see your ?',
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
        password: 'Mot de passe',
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
        wantToSeeYour: 'Voulez-vous voir votre ?',
      },
      navbar: {
        home: 'Accueil',
        profil: 'Profil',
        users: 'Utilisateurs',
      },
    },
  },
};

// @see https://github.com/i18next/react-i18next/blob/master/example/react/src/i18n.js
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
