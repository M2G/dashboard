import type { JSX } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import type { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import './index.scss';

import {
  ERROR_TEXT_REQUIRED,
  INITIAL_VALUES,
  INPUT_NAME,
  LABEL_EMAIL,
  LABEL_PASSWORD,
  PLACEHOLDER_EMAIL,
  PLACEHOLDER_PASSWORD,
  formSchema,
} from './constants';

type FormSchemaType = z.infer<typeof formSchema>;

function UserNewForm({ onSubmit }: { onSubmit: SubmitHandler<FormSchemaType> }): JSX.Element {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<FormSchemaType>({
    defaultValues: {
      ...INITIAL_VALUES,
    },
    resolver: zodResolver(formSchema),
  });

  return (
    <div className="form-create">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-floating mb-3">
          <input
            className="form-control mb-2"
            id="floatingEmail"
            placeholder={PLACEHOLDER_EMAIL}
            type="email"
            {...register(INPUT_NAME.EMAIL)}
            required
          />
          {errors?.[INPUT_NAME.EMAIL] ? (
            <span className="error-text">{errors[INPUT_NAME.EMAIL].message}</span>
          ) : null}
          <label htmlFor="floatingEmail">{LABEL_EMAIL}</label>
        </div>
        <div className="form-floating mb-3">
          <input
            className="form-control mb-2"
            id="floatingEmail"
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
        <button className="btn btn-light" disabled={isSubmitting} type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default UserNewForm;
