import { useState } from 'react';

import { useAppDispatch } from '@/redux/hooks';
import { useAnswers } from '@/hooks';
import { areConditionsMet } from '@/utils';
import { resetAnswers, setAnswer } from '@/redux/slices/answersSlice';
import { questions } from '@/app/questions/page';

/**
 * Custom hook to manage the state and logic of a poll.
 *
 * @returns {object} - An object containing the current step, navigation functions, and poll state.
 */
export const usePoll = () => {
  const [prevSteps, setPrevSteps] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const dispatch = useAppDispatch();
  const answers = useAnswers();

  const isFirstQuestion = currentIndex === 0;

  const proceed = (stepId: string, answerValue: string) => {
    setPrevSteps((p) => [...p, currentIndex]);

    const newAnswers = { ...answers, [stepId]: answerValue };

    const nextIndex = questions.findIndex((question, i) => {
      const { conditions } = question;

      if (i <= currentIndex) {
        return false;
      }

      return !conditions || areConditionsMet(conditions, newAnswers);
    });

    if (nextIndex === -1) {
      setIsFinished(true);
    }

    setCurrentIndex(nextIndex);
    dispatch(setAnswer({ stepId, answerValue }));
  };

  const back = () => {
    const lastIndex = prevSteps.at(-1);

    if (lastIndex !== undefined) {
      setCurrentIndex(lastIndex);
      setPrevSteps((p) => p.slice(0, -1));
    }
  };

  const reset = () => {
    setPrevSteps([]);
    setCurrentIndex(0);
    setIsFinished(false);
    dispatch(resetAnswers());
  };

  const getAnswer = (stepId: string) => answers[stepId];

  return {
    currentStep: questions[currentIndex],
    isFirstQuestion,
    isFinished,
    getAnswer,
    proceed,
    back,
    reset,
  };
};
