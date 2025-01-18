import { useAnswers } from '@/hooks';
import { questions } from '@/app/questions/page';
import { AnimationContainer, Button } from '@/components';

import styles from './Results.module.css';
import { Answer } from '@/components/Results/Answer/Answer';

interface ResultsProps {
  onReset: () => void;
}

export const Results = ({ onReset }: ResultsProps) => {
  const answers = useAnswers();

  const filteredQuestions = questions.filter(
    (question) => answers[question.id],
  );

  return (
    <AnimationContainer uniqueKey="results">
      <main className={styles.results}>
        <h1 className={styles.title}>Results 🎉</h1>

        <section className={styles.answersList}>
          {filteredQuestions.map((question) => {
            const answerId = answers[question.id];

            const answerLabel = question.options.find(
              (option) => option.value === answerId,
            )?.label;

            return (
              <Answer answerLabel={answerLabel} question={question.question} />
            );
          })}
        </section>

        <Button onClick={onReset} variant="secondary">
          Retake the Test
        </Button>
      </main>
    </AnimationContainer>
  );
};
