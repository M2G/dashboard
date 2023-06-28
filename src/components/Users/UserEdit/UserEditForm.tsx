import type { SubmitHandler } from 'react-hook-form';
import type { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

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
            placeholder={PLACEHOLDER_FIRST_NAME}
            type="email"
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
            id="floatingPassword"
            placeholder={PLACEHOLDER_LAST_NAME}
            type="password"
            {...register(INPUT_NAME.LAST_NAME)}
            required
          />
          {errors?.[INPUT_NAME.LAST_NAME] ? (
            <span className="error-text">{errors[INPUT_NAME.LAST_NAME].message}</span>
          ) : null}
          <label htmlFor="floatingLastname">{LABEL_LAST_NAME}</label>
        </div>
        <div className="form-floating">
          <input
            className="form-control mb-2"
            id="floatingPassword"
            placeholder={PLACEHOLDER_EMAIL}
            type="password"
            {...register(INPUT_NAME.EMAIL)}
            required
          />
          {errors?.[INPUT_NAME.EMAIL] ? (
            <span className="error-text">{errors[INPUT_NAME.EMAIL].message}</span>
          ) : null}
          <label htmlFor="floatingEmail">{LABEL_EMAIL}</label>
        </div>
        <button className="btn btn-light" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default UserEditForm;
