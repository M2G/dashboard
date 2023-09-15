import type { JSX } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import type { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button, Field } from 'ui';

import { formSchema, INITIAL_VALUES, INPUT_NAME, LABEL_EMAIL, LABEL_PASSWORD } from './constants';

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
    <div className="pt-[50px]">
      <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
        <Field
          className="_:mb-4"
          label={LABEL_EMAIL}
          name={INPUT_NAME.EMAIL}
          type="email"
          {...{ errors, register }}
        />
        <Field
          className="_:mb-4"
          label={LABEL_PASSWORD}
          name={INPUT_NAME.PASSWORD}
          type="password"
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

export default UserNewForm;
