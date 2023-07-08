import type { SubmitHandler } from 'react-hook-form';
import type { z } from 'zod';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import ROUTER_PATH from 'constants/RouterPath';

import {
  INPUT_NAME,
  LABEL_EMAIL,
  LABEL_PASSWORD,
  PLACEHOLDER_EMAIL,
  PLACEHOLDER_PASSWORD,
  formSchema,
} from './constants';
import './index.scss';

type FormSchemaType = z.infer<typeof formSchema>;

function ForgotPasswordForm({
  initialValues,
  onSubmit,
}: {
  initialValues: any;
  onSubmit: SubmitHandler<FormSchemaType>;
}) {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<FormSchemaType>({
    defaultValues: {
      ...initialValues,
    },
    resolver: zodResolver(formSchema),
  });

  return (
    <div className="form-signup">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <h1 className="h3 mb-1">Please authenticate</h1>
          <span>to continue</span>
        </div>
        <div className="form-floating">
          <input
            className="form-control mb-2"
            id="floatingInput"
            placeholder={PLACEHOLDER_EMAIL}
            type="email"
            {...register(INPUT_NAME.EMAIL)}
            required
          />
          {errors?.[INPUT_NAME.EMAIL] ? (
            <span className="error-text">{errors[INPUT_NAME.EMAIL].message}</span>
          ) : null}
          <label htmlFor="floatingInput">{LABEL_EMAIL}</label>
        </div>
        <div className="form-floating">
          <input
            className="form-control mb-2"
            id="floatingPassword"
            placeholder={PLACEHOLDER_PASSWORD}
            type="password"
            {...register(INPUT_NAME.PASSWORD)}
            required
          />
          {errors?.[INPUT_NAME.PASSWORD] ? (
            <span className="error-text">{errors[INPUT_NAME.PASSWORD].message}</span>
          ) : null}
          <label htmlFor="floatingPassword">{LABEL_PASSWORD}</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" disabled={isSubmitting} type="submit">
          Sign up
        </button>
        <div className="c-action">
          <span>Have an account ?</span>
          <Link className="text-muted" to={ROUTER_PATH.SIGNIN}>
            Signin
          </Link>
          <Link className="text-muted" to={ROUTER_PATH.FORGOT_PASSWORD}>
            Forgot Password
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ForgotPasswordForm;
