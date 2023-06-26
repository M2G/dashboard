import { z } from 'zod';

export const INPUT_NAME = {
  EMAIL: 'email',
  PASSWORD: 'password',
};

export const INITIAL_VALUES = {
  [INPUT_NAME.EMAIL]: '',
  [INPUT_NAME.PASSWORD]: '',
};

export const ERROR_TEXT_REQUIRED = {
  ERROR_TEXT_REQUIRED_PASSWORD: 'Password is required',
  ERROR_TEXT_REQUIRED_EMAIL: 'Email is required',
};

export const LABEL_EMAIL = 'Email';
export const LABEL_PASSWORD = 'Password';

export const PLACEHOLDER_EMAIL = 'Email';
export const PLACEHOLDER_PASSWORD = 'Mot de passe';

export const formSchema = z.object({
  email: z.string().email('Invalid email').min(1, ERROR_TEXT_REQUIRED.ERROR_TEXT_REQUIRED_EMAIL),
  password: z.string().min(1, ERROR_TEXT_REQUIRED.ERROR_TEXT_REQUIRED_PASSWORD),
  // .min(8, 'Password must have more than 8 characters'),
});
