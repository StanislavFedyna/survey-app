'use client';

import {
  Title,
  Button,
  Subtitle,
  Header,
  AnimationContainer,
} from '@/components';
import { SCREEN_TYPES } from '@/constansts';

import { Question } from '@/types';

import styles from './SingleChoice.module.css';

interface SingleChoice {
  step: Question;
  onNext: (stepId: string, answerValue: string) => void;
  onBack: () => void;
  isFirstQuestion: boolean;
}

export const SingleChoice = ({
  step,
  isFirstQuestion,
  onNext,
  onBack,
}: SingleChoice) => {
  const { question, subContent, options, id } = step;

  return (
    <main className={styles.singleChoiceContainer}>
      <Header
        screenType={SCREEN_TYPES.SINGLE_CHOICE}
        className={styles.header}
        onBack={onBack}
        showBackIcon={!isFirstQuestion}
      />
      <AnimationContainer uniqueKey={id}>
        <section className={styles.contentWrapper}>
          <Title text={question} type="dark" />

          {subContent && (
            <Subtitle text={subContent} className={styles.subtitle} />
          )}

          <div className={styles.options}>
            {options?.map((option, index) => (
              <Button key={index} onClick={() => onNext(id, option.value)}>
                {option.label}
              </Button>
            ))}
          </div>
        </section>
      </AnimationContainer>
    </main>
  );
};
