import { useAppSelector } from '@/redux/hooks';
import { Answers } from '@/types';

export const useAnswers = (): Answers =>
  useAppSelector((state) => state.answers);
