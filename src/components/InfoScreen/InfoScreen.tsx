'use client';

import { AnimationContainer, Button, Header, Title } from '@/components';
import { Question } from '@/types';
import { usePoll } from '@/hooks';

import styles from './InfoScreen.module.css';
import { ANIMATION_KEYS } from '@/constansts';

interface InfoScreenProps {
  currentQuestion: Question;
}

export const InfoScreen = ({ currentQuestion }: InfoScreenProps) => {
  const { proceed, back } = usePoll(currentQuestion.id);

  return (
    <main className={styles.infoScreen}>
      <Header
        screenType={currentQuestion.screenType}
        className={styles.header}
        onBack={back}
      />

      <AnimationContainer uniqueKey={ANIMATION_KEYS.INFO_SCREEN}>
        <article className={styles.innerContentWrapper}>
          <Title text={currentQuestion.question} type="light" />
          <p className={styles.bodyContent}>{currentQuestion.subContent}</p>
          <Button variant="secondary" onClick={() => proceed('')}>
            Next
          </Button>
        </article>
      </AnimationContainer>
    </main>
  );
};
