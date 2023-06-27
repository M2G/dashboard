import type { SubmitHandler } from 'react-hook-form';
import type { z } from 'zod';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  INPUT_NAME,
  LABEL_NEW_PASSWORD,
  LABEL_VERIFY_PASSWORD,
  PLACEHOLDER_NEW_PASSWORD,
  PLACEHOLDER_VERIFY_PASSWORD,
  formSchema,
} from './constants';
import './index.scss';

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
            placeholder={PLACEHOLDER_NEW_PASSWORD}
            type="email"
            {...register(INPUT_NAME.NEW_PASSWORD)}
            required
          />
          {errors?.[INPUT_NAME.NEW_PASSWORD] ? (
            <span className="error-text">{errors[INPUT_NAME.NEW_PASSWORD].message}</span>
          ) : null}
          <label htmlFor="floatingInput">{LABEL_NEW_PASSWORD}</label>
        </div>
        <div className="form-floating">
          <input
            className="form-control mb-2"
            id="floatingInput"
            placeholder={PLACEHOLDER_VERIFY_PASSWORD}
            type="email"
            {...register(INPUT_NAME.VERIFY_PASSWORD)}
            required
          />
          {errors?.[INPUT_NAME.VERIFY_PASSWORD] ? (
            <span className="error-text">{errors[INPUT_NAME.VERIFY_PASSWORD].message}</span>
          ) : null}
          <label htmlFor="floatingPassword">{LABEL_VERIFY_PASSWORD}</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ResetPasswordForm;
