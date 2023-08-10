import ROUTER_PATH from '@/constants/RouterPath';
import { zodResolver } from '@hookform/resolvers/zod';
import type { JSX } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button, Field } from 'ui';
import { z } from 'zod';
import {
  formSchema,
  INPUT_NAME,
  LABEL_EMAIL,
  LABEL_FIRST_NAME,
  LABEL_LAST_NAME,
  PLACEHOLDER_EMAIL,
  PLACEHOLDER_LAST_NAME,
} from './constants';

interface IForm {
  initialValues: Record<any, unknown>;
  onSubmit: (value: any) => Record<any, any>;
}

type FormSchemaType = z.infer<typeof formSchema>;

function ProfilForm({
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
    <div className="flex min-h-screen flex-col items-center justify-center" id="form-profil">
      <form className="rounded-2xl bg-white p-[25px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <h1 className="text-3xl font-bold dark:text-black">User Profil</h1>
        </div>
        <Field
          className="_:mb-2"
          id="floatingInput"
          label={LABEL_FIRST_NAME}
          name={INPUT_NAME.FIRST_NAME}
          type="email"
          {...{ errors, register }}
          required
        />
        <div className="form-floating">
          <input
            className="form-control mb-2"
            id="floatingInput"
            placeholder={PLACEHOLDER_LAST_NAME}
            type="text"
            {...register(INPUT_NAME.LAST_NAME)}
            required
          />
          {errors[INPUT_NAME.LAST_NAME] ? (
            <span className="error-text">{errors[INPUT_NAME.LAST_NAME].message}</span>
          ) : null}
          <label htmlFor="floatingInput">{LABEL_LAST_NAME}</label>
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
          <label htmlFor="floatingPassword">{LABEL_EMAIL}</label>
        </div>
        <Button className="w-full" disabled={isSubmitting} type="submit" variant="primary">
          Save
        </Button>
        <div className="c-action gab-1 mt-3 flex flex-nowrap justify-start">
          <span className="m-0 box-border text-sm font-normal leading-tight">
            Have an account ?
          </span>
          <Link
            className="mx-1 box-border inline-flex cursor-pointer items-center text-sm font-normal leading-tight text-gray-950 no-underline hover:text-gray-600"
            to={ROUTER_PATH.CHANGE_PASSWORD}>
            Change Password
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

export default ProfilForm;
