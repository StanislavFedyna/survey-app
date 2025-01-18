'use client';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { redirect } from 'next/navigation';

import { AnimationContainer, Button } from '@/components';
import { keyBy, getQuestionContent } from '@/utils';
import { questions } from '@/config';
import { ANIMATION_KEYS, DEFAULT_QUESTION, PAGE_URLS } from '@/constansts';
import { resetAnswers } from '@/redux/slices/answersSlice';

import { Answer } from './Answer/Answer';

import styles from './Results.module.css';

export const Results = () => {
  const { answers } = useSelector((state: RootState) => state.answers);
  const dispatch = useDispatch();

  const filteredQuestions = questions.filter(
    (question) => answers[question.id],
  );

  const flatOptions = questions.flatMap((question) => question?.options);
  const optionsByValue = keyBy(flatOptions, (o) => o?.value!);

  const handleReset = () => {
    dispatch(resetAnswers());
    redirect(PAGE_URLS.QUESTIONS(DEFAULT_QUESTION));
  };

  return (
    <AnimationContainer uniqueKey={ANIMATION_KEYS.RESULTS}>
      <main className={styles.results}>
        <h1 className={styles.title}>Results 🎉</h1>

        <section className={styles.answersList}>
          {filteredQuestions.map((question) => {
            const answerId = answers[question.id];

            const answerLabel = question.options.find(
              (option) => option.value === answerId,
            )?.label;

            return (
              <Answer
                key={question.id}
                answerLabel={answerLabel}
                question={getQuestionContent(
                  question.question,
                  optionsByValue,
                  answers,
                )}
              />
            );
          })}
        </section>

        <Button onClick={handleReset} variant="secondary">
          Retake the Test
        </Button>
      </main>
    </AnimationContainer>
  );
};
