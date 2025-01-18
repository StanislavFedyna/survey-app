import { questionnaireConfig } from '@/config';

export const PAGE_URLS = {
  QUESTIONS: (id: string) => `/questions/${id}`,
  RESULTS: '/questions/results',
};

export const SCREEN_TYPES = {
  INFORMATION: 'information',
  SINGLE_CHOICE: 'single-choice',
};

export const ANIMATION_KEYS = {
  SINGLE_CHOICE: 'single-choice-key',
  RESULTS: 'results-key',
  INFO_SCREEN: 'info-screen-key',
};

export const DEFAULT_QUESTION = questionnaireConfig[0].id;
