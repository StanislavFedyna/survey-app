import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

import styles from './Button.module.css';

type AnswerButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: 'primary' | 'secondary';
};

export const Button = ({
  children,
  variant = 'primary',
  className,
  ...rest
}: AnswerButtonProps) => {
  const buttonClassName = clsx(
    styles.button,
    variant === 'secondary' && styles.secondary,
    className,
  );

  return (
    <button className={buttonClassName} {...rest}>
      {children}
    </button>
  );
};
