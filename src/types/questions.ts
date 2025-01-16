export interface Questions {
  id: string;
  title: string;
  subtitle?: string;
  screenType: string;
  options: string[];
}

export interface QuestionnaireConfig {
  questions: Questions[];
}
