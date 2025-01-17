import { Answers } from '@/types';

export const replacePlaceholders = (text: string, answers: Answers) => {
  return text.replace(/{(\w+)}/g, (_, key) => answers[key] || `{${key}}`);
};
