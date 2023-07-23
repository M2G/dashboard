import PropTypes from 'prop-types';
import { FC, HTMLInputTypeAttribute, ReactNode, useState } from 'react';
import { FieldErrors } from 'react-hook-form';

import { AnyComponent } from '@types';

/**
 * A component to display a field input.
 * It can be an input or a textarea.
 *
 * @param tag - The tag to use for the component.
 * @param label - The label of the field.
 * @param name - The name of the field.
 *
 * @param type - The type of the field.
 * @param status - The status of the field.
 *
 * @returns {JSX.Element}
 */
interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  errors?: FieldErrors;
  icon?: ReactNode;
  label: string;

  name: string;
  // React hook forms
  register?: Function;
  rules?: object;
  status?: 'danger' | 'default' | 'success' | 'warning';

  tag?: 'input' | 'textarea';
  // basics
  type?: HTMLInputTypeAttribute;
}

export const StatusVariants = {
  danger: 'border-2 border-danger _:focus:border-danger',
  default: '',
  success: 'border-success _:focus:border-success',
  warning: 'border-2 border-warning _:focus:border-warning',
};

export const Field: FC<FieldProps> = ({
  // basics
  className = '',
  errors,
  icon,

  label,
  name,
  placeholder = ' ',
  // React hook forms
  register = () => {},

  rules = {},
  status = 'default',
  tag = 'input',
  type = 'text',
  ...rest
}) => {
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const DynamicTag = tag || (`${tag}` as keyof AnyComponent);

  const currentRules = rules || { required: true };

  return (
    <div className={['mb-6 min-w-[240px]', className].join(' ')}>
      <div className="relative min-h-[52px] w-full">
        <DynamicTag
          className={[
            'peer min-h-[52px] rounded-sm px-[15px] pt-4 font-sans text-sm font-normal outline outline-0',
            'border-alt text-50 h-full w-full border bg-white leading-6',
            'disabled:border-grey-dark disabled:bg-grey disabled:text-variants-50 disabled:cursor-not-allowed disabled:border',
            'placeholder-shown:border-alt',
            'focus:border-black focus:outline-0',
            'transition-all',
            tag === 'textarea' && '_:min-h-[156px] _:pt-6',
            type === 'password' && '_:pr-16',
            StatusVariants[status],
            errors && errors[name] && '_:border-2 _:border-danger',
          ].join(' ')}
          aria-invalid={errors && errors[name] ? 'true' : 'false'}
          type={!isRevealed ? type : 'text'} // Force type to text to show password
          {...{ name, placeholder, ...rest }}
          {...register(name, currentRules)}
        />
        <label
          className={[
            'pointer-events-none absolute left-4 top-2 flex h-full w-full select-none text-[12px] font-normal leading-[1.5] transition-all',
            'text-gray-400 peer-placeholder-shown:top-0 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[3.5] dark:text-gray-500',
            'peer-focus:top-2 peer-focus:text-[12px] peer-focus:leading-[1.5] peer-focus:after:scale-x-100',
            'peer-disabled:text-variants-50 peer-disabled:peer-placeholder-shown:text-variants-50',
          ].join(' ')}
          htmlFor={name}>
          {label}
        </label>
        {type === 'password' && (
          <button
            className={[
              'min-w-8 min-h-8 bg-tranparent text-variants-50 absolute right-0 top-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full px-1 py-1',
              'hover:bg-grey -translate-x-1/2 -translate-y-1/2 transition-colors hover:text-black disabled:pointer-events-none',
            ].join(' ')}
            onClick={() => setIsRevealed((prev) => !prev)}
          />
        )}
      </div>
      {errors && errors[name] ? (
        <div className="border bg-red-100 px-4 py-3" role="alert">
          <span>{errors[name]?.message}</span>
        </div>
      ) : null}
    </div>
  );
};

Field.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['default', 'danger', 'success', 'warning']),
  tag: PropTypes.oneOf(['input', 'textarea']),
  type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'tel']),
};
