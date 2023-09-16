import type { SubmitHandler } from 'react-hook-form';
import type { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button, Field } from 'ui';
import { formSchema, INPUT_NAME, LABEL_NEW_PASSWORD, LABEL_VERIFY_PASSWORD } from './constants';
import { Link } from 'react-router-dom';
import ROUTER_PATH from '@/constants/RouterPath';

type FormSchemaType = z.infer<typeof formSchema>;

function ResetPasswordForm({
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
    <div
      className="flex min-h-screen flex-col items-center justify-center"
      id="form-reset-password">
      <form className="rounded-2xl bg-white p-[25px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <h1 className="text-3xl font-bold dark:text-black">Reset password</h1>
          <span>to continue</span>
        </div>
        <Field
          className="_:mb-2"
          label={LABEL_NEW_PASSWORD}
          name={INPUT_NAME.NEW_PASSWORD}
          type="email"
          {...{ errors, register }}
          required
        />
        <Field
          className="_:mb-2"
          label={LABEL_VERIFY_PASSWORD}
          name={INPUT_NAME.VERIFY_PASSWORD}
          type="email"
          {...{ errors, register }}
          required
        />
        <Button className="w-full" disabled={isSubmitting} type="submit" variant="primary">
          Submit
        </Button>
        <div className="c-action gab-1 mt-3 flex flex-nowrap justify-start">
          <span className="m-0 box-border text-sm font-normal leading-tight">
            Have an account ?
          </span>
          <Link
            className="mx-1 box-border inline-flex cursor-pointer items-center text-sm font-normal leading-tight text-gray-950 no-underline hover:text-gray-600"
            to={ROUTER_PATH.HOME}>
            Home
          </Link>
          <Link
            className="ml-0 box-border inline-flex cursor-pointer items-center text-sm font-normal leading-tight text-gray-950 no-underline hover:text-gray-600"
            to={ROUTER_PATH.SIGNUP}>
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ResetPasswordForm;
