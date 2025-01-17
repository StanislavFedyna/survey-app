import styles from './Answer.module.css';

export const Answer = ({ question, answer }) => (
  <article className={styles.answer}>
    <h2 className={styles.question}>{question}</h2>
    <p className={styles.answer}>{answer}</p>
  </article>
);
