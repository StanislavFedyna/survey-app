import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { setAnswer, proceed, back, finish } from '@/redux/slices/answersSlice';

import { areConditionsMet } from '@/utils';
import { RootState } from '@/redux/store';
import questionnaireConfig from '@/config/questionnaireConfig.json';
import { PAGE_URLS } from '@/constansts';
import { Option, Question } from '@/types';

export const usePoll = (id: Question['id']) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isFinished, answers } = useSelector(
    (state: RootState) => state.answers,
  );

  const questionIndex = questionnaireConfig.findIndex((q) => q.id === id);

  useEffect(() => {
    if (isFinished) router.push(PAGE_URLS.RESULTS);
  }, [isFinished, router]);

  const handleProceed = (answerValue: Option['value']) => {
    const newAnswers = { ...answers, [id]: answerValue };

    const nextIndex = questionnaireConfig.findIndex((q, i) => {
      const { conditions } = q;

      if (i <= questionIndex) {
        return false;
      }

      return !conditions || areConditionsMet(conditions, newAnswers);
    });

    if (nextIndex === -1) {
      dispatch(finish());
    } else {
      dispatch(proceed(nextIndex));

      router.push(PAGE_URLS.QUESTIONS(questionnaireConfig[nextIndex].id));
    }

    dispatch(setAnswer({ stepId: id, answerValue }));
  };

  const handleBack = () => {
    if (questionIndex > 0) {
      dispatch(back());

      router.push(
        PAGE_URLS.QUESTIONS(questionnaireConfig[questionIndex - 1].id),
      );
    }
  };

  return {
    isFirstQuestion: questionIndex === 0,
    isFinished,
    proceed: handleProceed,
    back: handleBack,
  };
};
