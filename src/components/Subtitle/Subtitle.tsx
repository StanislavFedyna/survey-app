import clsx from 'clsx';

import styles from './Subtitle.module.css';

interface SubtitleProps {
  text: string;
  className?: string;
}

export const Subtitle = ({ text, className }: SubtitleProps) => {
  return <h2 className={clsx(styles.title, className)}>{text}</h2>;
};
