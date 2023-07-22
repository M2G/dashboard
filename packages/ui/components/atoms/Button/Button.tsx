import PropTypes from 'prop-types';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { AnyComponent } from '@types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: AnyComponent;
  isLoading?: boolean;
  size?: 'regular' | 'small';
  variant?: 'primary' | 'secondary';
}

export const ButtonVariants = {
  primary: [
    'min-w-[176px] text-white text-md border border-dark bg-dark font-display',
    'active:bg-dark-active active:border-dark-active',
    'hover:bg-dark-hover hover:border-dark-hover',
    'disabled:text-white/[.5] disabled:bg-dark-disabled disabled:border-dark-disabled disabled:hover:text-white/[.5] disabled:hover:bg-dark-disabled disabled:border-dark-disabled',
    'hover:disabled:text-white/[.5] hover:disabled:bg-dark-disabled hover:disabled:border-dark-disabled hover:disabled:border-dark-disabled',
  ].join(' '),
  secondary: [
    'min-w-[176px] text-white border border-secondary bg-secondary font-display _:text-variants',
    'active:bg-secondary-active active:border-secondary-active',
    'hover:bg-secondary-hover hover:border-secondary-hover',
    'disabled:text-variants/[.5] disabled:bg-secondary-disabled disabled:hover:text-white/[.5] disabled:hover:bg-secondary-disabled disabled:border-secondary-disabled',
    'hover:disabled:text-variants/[.5] hover:disabled:bg-secondary-disabled hover:disabled:border-secondary-disabled',
  ].join(' '),
};

/**
 * Sizes of the button
 */
export const ButtonSizes = {
  regular: '_:px-4 _:py-[8px] min-h-[48px] text-lg',
  small: '_:px-4 _:py-1.5 min-h-[34px]',
};

/**
 * Versatile button component that can be used as a link or a button
 *
 * @param {string} tag - The tag or component to use
 * @param {string} children - The content specified between the tags
 * @param {string} variant - The variant of the button
 * @param {string} size - The size of the button
 * @param {string} icon - The icon to display
 * @param {boolean} isLoading - Override icon and content to show a loading spinner
 *
 * @returns {JSX.Element}
 */
export const Button: FC<ButtonProps> = ({
  children,
  icon,
  size = 'regular',
  tag = 'button',
  variant = 'primary',
  ...rest
}) => {
  const DynamicTag = tag || (`${tag}` as keyof AnyComponent);

  return (
    <DynamicTag
      {...rest}
      className={[
        'inline-flex cursor-pointer items-center justify-center rounded',
        'text-left font-semibold',
        'disabled:cursor-not-allowed',
        'transition-colors',
        ButtonVariants[variant],
        ButtonSizes[size],
        rest.className,
      ].join(' ')}
      disabled={rest.disabled}>
      {children}
    </DynamicTag>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.any,
  isLoading: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'regular']),
  tag: PropTypes.any,
  variant: PropTypes.oneOf(['primary', 'secondary']),
};
