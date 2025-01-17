'use client';

import { Button, Header, Title } from '@/components';
import { Question } from '@/types';

import styles from './InfoScreen.module.css';

interface InfoScreenProps {
  step: Question;
  onNext: any;
}

export const InfoScreen = ({ step }: InfoScreenProps) => {
  const { question, subContent, screenType, onNext } = step;

  return (
    <main className={styles.infoScreen}>
      <Header screenType={screenType} className={styles.header} />

      <section className={styles.innerContentWrapper}>
        <Title text={question} type="light" />

        <p className={styles.bodyContent}>{subContent}</p>

        <Button variant="secondary" onClick={onNext}>
          Next
        </Button>
      </section>
    </main>
  );
};
