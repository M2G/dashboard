import type { JSX } from 'react';
import {
  PLACEHOLDER_PASSWORD,
  PLACEHOLDER_EMAIL,
  INPUT_NAME,
  ERROR_TEXT_REQUIRED,
  LABEL_PASSWORD,
  LABEL_EMAIL,
  formSchema,
} from './constants';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

type FormSchemaType = z.infer<typeof formSchema>;

function UserNewForm({
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
            type="email"
            {...register(INPUT_NAME.PASSWORD)}
            required
          />
          {errors?.[INPUT_NAME.PASSWORD] ? (
            <span className="error-text">{errors[INPUT_NAME.PASSWORD].message}</span>
          ) : null}
          <label htmlFor="floatingPassword">{LABEL_PASSWORD}</label>
        </div>
        <button className="btn btn-light" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default UserNewForm;
