import clsx from 'clsx';

import styles from './Title.module.css';

interface TitleProps {
  text: string;
  type: 'dark' | 'light';
}

export const Title = ({ text, type }: TitleProps) => {
  const className = clsx(styles.title, {
    [styles.dark]: type === 'dark',
    [styles.light]: type === 'light',
  });

  return <h1 className={className}>{text}</h1>;
};
