import type { SubmitHandler } from 'react-hook-form';
import type { z } from 'zod';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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
import './index.scss';

type FormSchemaType = z.infer<typeof formSchema>;

function UserEditForm({
  initialValues,
  onSubmit,
}: {
  initialValues: Record<string, string>;
  onSubmit: SubmitHandler<FormSchemaType>;
}) {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    const defaultValues = {
      [INPUT_NAME.EMAIL]: initialValues[INPUT_NAME.EMAIL],
      [INPUT_NAME.FIRST_NAME]: initialValues[INPUT_NAME.FIRST_NAME],
      [INPUT_NAME.LAST_NAME]: initialValues[INPUT_NAME.LAST_NAME],
    };
    reset({ ...defaultValues });
  }, [initialValues, reset]);

  return (
    <div className="form-edit">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-floating">
          <input
            className="form-control mt-3"
            id="floatingInput"
            placeholder={PLACEHOLDER_FIRST_NAME}
            type="text"
            {...register(INPUT_NAME.FIRST_NAME)}
          />
          {errors?.[INPUT_NAME.FIRST_NAME]?.message && (
            <span className="error-text mb-2">{errors[INPUT_NAME.FIRST_NAME].message}</span>
          )}
          <label htmlFor="floatingInput">{LABEL_FIRST_NAME}</label>
        </div>
        <div className="form-floating">
          <input
            className="form-control mt-3"
            id="floatingPassword"
            placeholder={PLACEHOLDER_LAST_NAME}
            type="text"
            {...register(INPUT_NAME.LAST_NAME)}
          />
          {errors?.[INPUT_NAME.LAST_NAME]?.message && (
            <span className="error-text mb-2">{errors[INPUT_NAME.LAST_NAME].message}</span>
          )}
          <label htmlFor="floatingLastname">{LABEL_LAST_NAME}</label>
        </div>
        <div className="form-floating">
          <input
            className="form-control mt-3"
            id="floatingPassword"
            placeholder={PLACEHOLDER_EMAIL}
            type="email"
            {...register(INPUT_NAME.EMAIL)}
          />
          {errors?.[INPUT_NAME.EMAIL]?.message && (
            <span className="error-text mb-2">{errors[INPUT_NAME.EMAIL].message}</span>
          )}
          <label htmlFor="floatingEmail">{LABEL_EMAIL}</label>
        </div>
        <button className="btn btn-light mt-3" disabled={isSubmitting} type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default UserEditForm;
