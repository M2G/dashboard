import type { SubmitHandler } from 'react-hook-form';
import type { z } from 'zod';

import ROUTER_PATH from '@/constants/RouterPath';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button, Field } from 'ui';

import {
  formSchema,
  INPUT_NAME,
  LABEL_OLD_PASSWORD,
  LABEL_PASSWORD,
  LABEL_PASSWORD2,
} from './constants';

type FormSchemaType = z.infer<typeof formSchema>;

interface IForm {
  initialValues: Record<any, unknown>;
  onSubmit: SubmitHandler<FormSchemaType>;
}

function ChangePassordForm({ initialValues, onSubmit }: IForm): JSX.Element {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<FormSchemaType>({
    defaultValues: useMemo(
      () => ({
        ...initialValues,
      }),
      [initialValues],
    ),
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
  });

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center"
      id="form-forgot-password">
      <form className="rounded-2xl bg-white p-[25px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <h1 className="text-3xl font-bold dark:text-black">Forgot password</h1>
          <span>to continue</span>
        </div>
        <Field
          className="_:mb-2"
          label={LABEL_OLD_PASSWORD}
          name={INPUT_NAME.OLD_PASSWORD}
          type="password"
          {...{ errors, register }}
          required
        />
        <Field
          className="_:mb-2"
          label={LABEL_PASSWORD}
          name={INPUT_NAME.PASSWORD}
          type="password"
          {...{ errors, register }}
          required
        />
        <Field
          className="_:mb-2"
          label={LABEL_PASSWORD2}
          name={INPUT_NAME.PASSWORD2}
          type="password"
          {...{ errors, register }}
          required
        />
        <Button className="w-full" disabled={isSubmitting} type="submit" variant="primary">
          Change password
        </Button>
        <div className="c-action gab-1 mt-3 flex flex-nowrap justify-start">
          <span className="m-0 box-border text-sm font-normal leading-tight">
            Want to see your ?
          </span>
          <Link
            className="mx-1 box-border inline-flex cursor-pointer items-center text-sm font-normal leading-tight text-gray-950 no-underline hover:text-gray-600"
            to={ROUTER_PATH.PROFIL}>
            Profil
          </Link>
          <Link
            className="box-border inline-flex cursor-pointer items-center text-sm font-normal leading-tight text-gray-950 no-underline hover:text-gray-600"
            to={ROUTER_PATH.HOME}>
            Home
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ChangePassordForm;
