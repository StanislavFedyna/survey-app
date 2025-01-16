'use client';

import { Title, Button, Subtitle } from '../';

import styles from './QuestionForm.module.css';

interface QuestionForm {
  title: string;
  subtitle?: string;
  options: string[];
  onAnswerSelect: (answer: string) => void;
}

export const QuestionItem = ({
  title,
  subtitle,
  options,
  onAnswerSelect,
}: QuestionForm) => {
  return (
    <div className={styles.container}>
      <Title text={title} type="dark" />

      {subtitle && <Subtitle text={subtitle} />}

      <div className={styles.options}>
        {options?.map((option, index) => (
          <Button key={index} onClick={() => onAnswerSelect(option)}>
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};
