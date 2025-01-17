import { useAnswers } from '@/hooks';
import { questions } from '@/app/questions/page';
import { AnimationContainer, Button } from '@/components';

import styles from './Results.module.css';

interface ResultsProps {
  onReset: () => void;
}

export const Results = ({ onReset }: ResultsProps) => {
  const answers = useAnswers();

  const filteredQuestions = questions.filter(
    (question) => answers[question.id],
  );

  return (
    <main className={styles.results}>
      <h1 className={styles.title}>Results 🎉</h1>

      <AnimationContainer uniqueKey="results">
        <div className={styles.answersList}>
          {filteredQuestions.map((question, index) => {
            const answerId = answers[question.id];

            const answerLabel = question.options.find(
              (option) => option.value === answerId,
            )?.label;

            return (
              <div key={index} className={styles.answerItem}>
                <div className={styles.question}>{question.question}</div>
                <div className={styles.answer}>{answerLabel}</div>
              </div>
            );
          })}
        </div>
      </AnimationContainer>

      <Button onClick={onReset} variant="secondary">
        Retake the Test
      </Button>
    </main>
  );
};
