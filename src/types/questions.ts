export type Option = {
  value: string;
  label: string;
};

export type Question = {
  id: string;
  screenType: string;
  question: string;
  options: Option[];
  conditions?: Record<Question['id'], Option['value']>;
  subContent?: string;
};

export type Questions = Question[];

export type Answer = Record<Question['id'], Option['value']>;
