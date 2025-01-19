'use client';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

import {
  Title,
  Button,
  Subtitle,
  Header,
  AnimationContainer,
} from '@/components';
import { ANIMATION_KEYS, SCREEN_TYPES } from '@/constansts';
import { Question } from '@/types';
import { usePoll } from '@/hooks';
import { getQuestionContent, keyBy } from '@/utils';
import questionnaireConfig from '@/config/questionnaireConfig.json';

import styles from './SingleChoice.module.css';

interface SingleChoice {
  currentQuestion: Question;
}

export const SingleChoice = ({ currentQuestion }: SingleChoice) => {
  const { proceed, back, isFirstQuestion } = usePoll(currentQuestion.id);

  const { question, subContent, options } = currentQuestion;
  const { answers } = useSelector((state: RootState) => state.answers);

  const flatOptions = questionnaireConfig.flatMap(
    (question) => question?.options,
  );
  const optionsByValue = keyBy(flatOptions, (o) => o?.value!);
  const content = getQuestionContent(question, optionsByValue, answers);

  return (
    <main className={styles.singleChoiceContainer}>
      <Header
        screenType={SCREEN_TYPES.SINGLE_CHOICE}
        className={styles.header}
        onBack={back}
        showBackIcon={!isFirstQuestion}
      />
      <AnimationContainer uniqueKey={ANIMATION_KEYS.SINGLE_CHOICE}>
        <section className={styles.contentWrapper}>
          <Title text={content} type="dark" />

          {subContent && (
            <Subtitle text={subContent} className={styles.subtitle} />
          )}

          <div className={styles.options}>
            {options?.map((option, index) => (
              <Button key={index} onClick={() => proceed(option.value)}>
                {option.label}
              </Button>
            ))}
          </div>
        </section>
      </AnimationContainer>
    </main>
  );
};
