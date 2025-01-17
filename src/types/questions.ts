export type Option = {
  value: string;
  label: string;
};

export type Question = {
  id: string;
  screenType: string;
  question: string;
  options: Option[];
  conditions?: Record<string, string>;
  subContent?: string;
};

export type Questions = Question[];

export type Answers = Record<string, string>;
