import type { JSX } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import type { z } from 'zod';

import ROUTER_PATH from '@/constants/RouterPath';
import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';
import { Button, Field } from 'ui';

import { formSchema, INPUT_NAME, LABEL_EMAIL, LABEL_PASSWORD } from './constants';

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
    <div className="flex min-h-screen flex-col items-center justify-center" id="form-signin">
      <form className="rounded-2xl bg-white p-[25px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <h1 className="text-3xl font-bold dark:text-black">Create account</h1>
          <span>to continue</span>
        </div>
        <Field
          className="_:mb-2"
          id="floatingInput"
          label={LABEL_EMAIL}
          name={INPUT_NAME.EMAIL}
          type="email"
          {...{ errors, register }}
          required
        />
        <Field
          className="_:mb-2"
          id="floatingInput"
          label={LABEL_PASSWORD}
          name={INPUT_NAME.PASSWORD}
          type="email"
          {...{ errors, register }}
          required
        />
        <Button className="w-full" disabled={isSubmitting} type="submit" variant="primary">
          Sign up
        </Button>
        <div className="c-action gab-1 mt-3 flex flex-nowrap justify-start">
          <span className="m-0 box-border text-sm font-normal leading-tight">
            Have an account ?
          </span>
          <Link
            className="mx-1 box-border inline-flex cursor-pointer items-center text-sm font-normal leading-tight text-gray-950 no-underline hover:text-gray-600"
            to={ROUTER_PATH.SIGNIN}>
            Signin
          </Link>
          <Link
            className="box-border inline-flex cursor-pointer items-center text-sm font-normal leading-tight text-gray-950 no-underline hover:text-gray-600"
            to={ROUTER_PATH.FORGOT_PASSWORD}>
            Forgot Password
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SigninForm;
