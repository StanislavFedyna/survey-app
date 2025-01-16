import { useAppSelector } from '@/redux/hooks';

export const useAnswers = () => {
  return useAppSelector((state) => state.answers);
};
