import styles from './Answer.module.css';

export const Answer = ({ question, answerLabel }) => (
  <div className={styles.answerItem}>
    <div className={styles.question}>{question}</div>
    <div className={styles.answer}>{answerLabel}</div>
  </div>
);
