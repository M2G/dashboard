import type { JSX } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import type { z } from 'zod';

import ROUTER_PATH from '@/constants/RouterPath';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button } from 'ui';

import {
  formSchema,
  INPUT_NAME,
  LABEL_EMAIL,
  LABEL_PASSWORD,
  PLACEHOLDER_EMAIL,
  PLACEHOLDER_PASSWORD,
} from './constants';
import './index.scss';

type FormSchemaType = z.infer<typeof formSchema>;

function SigninForm({
  initialValues,
  onSubmit,
}: {
  initialValues: any;
  onSubmit: SubmitHandler<FormSchemaType>;
}): JSX.Element {
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
    <div className="form-signin flex min-h-screen flex-col items-center justify-center">
      <form className="rounded-2xl bg-white p-[25px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <h1 className="h3 mb-1">Please authenticate</h1>
          <span>to continue</span>
        </div>

        <div className="floating-input relative">
          <input
            className="mb-2 h-12 w-full rounded-md border border-gray-200 p-2 pb-0 focus:border-gray-500 focus:shadow-sm focus:outline-none"
            id="floatingInput"
            placeholder={PLACEHOLDER_EMAIL}
            type="email"
            {...register(INPUT_NAME.EMAIL)}
            required
          />
          {errors?.[INPUT_NAME.EMAIL] && (
            <span className="error-text">{errors[INPUT_NAME.EMAIL].message}</span>
          )}
          <label
            className="pointer-events-none absolute left-0 top-0 h-full origin-left transform px-2 py-[14px] transition-all duration-100 ease-in-out"
            htmlFor="email">
            {LABEL_EMAIL}
          </label>
        </div>

        <div className="floating-input relative">
          <input
            className="mb-2 h-12 w-full rounded-md border border-gray-200 p-2 pb-0 focus:border-gray-500 focus:shadow-sm focus:outline-none"
            id="floatingInput"
            placeholder={PLACEHOLDER_PASSWORD}
            type="password"
            {...register(INPUT_NAME.PASSWORD)}
            required
          />
          {errors?.[INPUT_NAME.PASSWORD] && (
            <span className="error-text">{errors[INPUT_NAME.PASSWORD].message}</span>
          )}
          <label
            className="pointer-events-none absolute left-0 top-0 h-full origin-left transform px-2 py-[14px] transition-all duration-100 ease-in-out"
            htmlFor="password">
            {LABEL_PASSWORD}
          </label>
        </div>

        <Button className="w-full" variant="primary" disabled={isSubmitting} type="submit">
          Sign in
        </Button>
        <div className="c-action gab-1 mt-3 flex flex-nowrap justify-start">
          <span className="m-0 box-border text-sm font-normal leading-tight">
            Have an account ?
          </span>
          <Link
            className="mx-1 box-border inline-flex cursor-pointer items-center text-sm font-normal leading-tight text-gray-900 no-underline"
            to={ROUTER_PATH.SIGNUP}>
            Signup
          </Link>
          <Link
            className="box-border inline-flex cursor-pointer items-center text-sm font-normal leading-tight text-gray-900 no-underline"
            to={ROUTER_PATH.FORGOT_PASSWORD}>
            Forgot Password
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SigninForm;
