import clsx from 'clsx';

import styles from './Title.module.css';

interface TitleProps {
  text: string;
  type: 'dark' | 'light';
  className?: string;
}

export const Title = ({ text, type, className }: TitleProps) => {
  const combinedClassName = clsx(
    styles.title,
    {
      [styles.dark]: type === 'dark',
      [styles.light]: type === 'light',
    },
    className,
  );

  return <h1 className={combinedClassName}>{text}</h1>;
};
