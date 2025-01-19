import React from 'react';

import { Question } from '@/types';
import { InfoScreen, SingleChoice } from '@/components';
import { SCREEN_TYPES } from '@/constansts';

import questionnaireConfig from '@/config/questionnaireConfig.json';

interface StaticParams {
  id: string;
}

export async function generateStaticParams(): Promise<StaticParams[]> {
  return questionnaireConfig.map((question) => ({
    id: question.id,
  }));
}

async function getCurrentQuestionById(id: string): Promise<Question> {
  return questionnaireConfig.find((q) => q.id === id) as Question;
}

interface QuestionsPage {
  params: Promise<{ id: string }>;
}

export default async function QuestionsPage({ params }: QuestionsPage) {
  const { id } = await params;
  const question = await getCurrentQuestionById(id);

  if (question.screenType === SCREEN_TYPES.SINGLE_CHOICE) {
    return <SingleChoice currentQuestion={question} />;
  }

  if (question.screenType === SCREEN_TYPES.INFORMATION) {
    return <InfoScreen currentQuestion={question} />;
  }

  return <div>Oops, something went wrong 😔</div>;
}
