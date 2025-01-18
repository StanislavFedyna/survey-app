import { useAppSelector } from '@/redux/hooks';
import { Answer } from '@/types';

export const useAnswers = (): Answer =>
  useAppSelector((state) => state.answers);
