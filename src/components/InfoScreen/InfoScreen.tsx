'use client';

import { Button, Header, Title } from '@/components';
import { Question } from '@/types';

import styles from './InfoScreen.module.css';

interface InfoScreenProps {
  step: Question;
  onNext: (stepId: string, answerValue: string) => void;
  onBack: () => void;
}

export const InfoScreen = ({ step, onNext, onBack }: InfoScreenProps) => {
  const { question, subContent, screenType } = step;

  return (
    <main className={styles.infoScreen}>
      <Header
        screenType={screenType}
        className={styles.header}
        onBack={onBack}
      />

      <article className={styles.innerContentWrapper}>
        <Title text={question} type="light" />
        <p className={styles.bodyContent}>{subContent}</p>
        <Button variant="secondary" onClick={onNext}>
          Next
        </Button>
      </article>
    </main>
  );
};
