import type { SubmitHandler } from 'react-hook-form';
import type { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button, Field } from 'ui';
import { formSchema, INPUT_NAME, LABEL_EMAIL } from './constants';

type FormSchemaType = z.infer<typeof formSchema>;

function ForgotPasswordForm({
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
    <div className="form-signup flex min-h-screen flex-col items-center justify-center">
      <form className="rounded-2xl bg-white p-[25px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <h1 className="h3 mb-1">Forgot password</h1>
          <span>to continue</span>
        </div>
        <Field
          className="mb-2"
          id="floatingInput"
          label={LABEL_EMAIL}
          // placeholder={PLACEHOLDER_EMAIL}
          type="email"
          {...register(INPUT_NAME.EMAIL)}
          required
        />
        <Button className="w-full" disabled={isSubmitting} type="submit" variant="primary">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ForgotPasswordForm;
