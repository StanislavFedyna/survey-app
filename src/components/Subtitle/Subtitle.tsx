import styles from './Subtitle.module.css';

interface SubtitleProps {
  text: string;
}

export const Subtitle = ({ text }: SubtitleProps) => {
  return <h2 className={styles.title}>{text}</h2>;
};
