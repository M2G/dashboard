import { z } from 'zod';
import type { JSX } from 'react';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ROUTER_PATH from 'constants/RouterPath';
import {
  INPUT_NAME,
  LABEL_EMAIL,
  LABEL_FIRST_NAME,
  LABEL_LAST_NAME,
  PLACEHOLDER_EMAIL,
  PLACEHOLDER_FIRST_NAME,
  PLACEHOLDER_LAST_NAME,
  formSchema,
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
    <div className="form-signup">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <h1 className="h3 mb-1">User Profil</h1>
        </div>
        <div className="form-floating">
          <input
            className="form-control mb-2"
            id="floatingInput"
            placeholder={PLACEHOLDER_FIRST_NAME}
            type="text"
            {...register(INPUT_NAME.FIRST_NAME)}
            required
          />
          {errors?.[INPUT_NAME.FIRST_NAME] ? (
            <span className="error-text">{errors[INPUT_NAME.FIRST_NAME].message}</span>
          ) : null}
          <label htmlFor="floatingInput">{LABEL_FIRST_NAME}</label>
        </div>
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
        <button className="w-100 btn btn-lg" type="submit">
          Save
        </button>
        <div className="c-action">
          <span>Have an account ?</span>
          <Link to={ROUTER_PATH.CHANGE_PASSWORD} className="text-muted">
            Change Password
          </Link>
          <Link to={ROUTER_PATH.HOME} className="text-muted">
            Home
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ProfilForm;
