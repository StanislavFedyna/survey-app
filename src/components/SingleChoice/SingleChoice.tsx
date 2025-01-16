'use client';

import { Title, Button, Subtitle, Header } from '@/components';
import { SCREEN_TYPES } from '@/constansts';
import { useAnswers } from '@/hooks';
import { Questions } from '@/types';

import styles from './SingleChoice.module.css';

interface SingleChoice {
  title: Questions['title'];
  subtitle?: Questions['subtitle'];
  options: Questions['options'];
}

export const SingleChoice = ({
  title,
  subtitle,
  options,
  onAnswerSelect,
}: SingleChoice) => {
  const answers = useAnswers();

  return (
    <main className={styles.singleChoiceContainer}>
      <Header
        screenType={SCREEN_TYPES.SINGLE_CHOICE}
        className={styles.header}
      />

      <div className={styles.contentWrapper}>
        <Title text={title} type="dark" />

        {subtitle && <Subtitle text={subtitle} className={styles.subtitle} />}

        <div className={styles.options}>
          {options?.map((option, index) => (
            <Button key={index} onClick={() => onAnswerSelect(option)}>
              {option}
            </Button>
          ))}
        </div>
      </div>
    </main>
  );
};
