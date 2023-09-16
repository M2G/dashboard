import type { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { Button, Field } from 'ui';

import {
  INPUT_NAME,
  LABEL_EMAIL,
  LABEL_FIRST_NAME,
  LABEL_LAST_NAME,
  formSchema,
} from './constants';

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
  } = useForm<FormSchemaType>({
    defaultValues: useMemo(
      () => ({
        ...initialValues,
      }),
      [initialValues],
    ),
    resolver: zodResolver(formSchema),
  });

  return (
    <div className="pt-[50px]">
      <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
        <Field
          className="_:mb-4"
          label={LABEL_FIRST_NAME}
          name={INPUT_NAME.FIRST_NAME}
          type="text"
          {...{ errors, register }}
        />
        <Field
          className="_:mb-4"
          label={LABEL_LAST_NAME}
          name={INPUT_NAME.LAST_NAME}
          type="text"
          {...{ errors, register }}
        />
        <Field
          className="_:mb-4"
          label={LABEL_EMAIL}
          name={INPUT_NAME.EMAIL}
          type="email"
          {...{ errors, register }}
        />
        <Button
          className="_:bg-white _:font-normal _:text-black w-full"
          disabled={isSubmitting}
          type="submit"
          variant="primary">
          Save
        </Button>
      </form>
    </div>
  );
}

export default UserEditForm;
