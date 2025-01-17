import { useAppSelector } from '@/redux/hooks';
import { Answers } from '@/types';

export const useAnswers = (): Answers => {
  return useAppSelector((state) => state.answers);
};
