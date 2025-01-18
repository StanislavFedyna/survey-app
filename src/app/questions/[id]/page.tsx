import React from 'react';

import { questions } from '@/config';
import { Question } from '@/types';
import { InfoScreen, SingleChoice } from '@/components';
import { SCREEN_TYPES } from '@/constansts';

export const revalidate = 604800;

export async function generateStaticParams() {
  return questions.map((question) => ({
    id: question.id,
  }));
}

async function getQuestion(id: string): Promise<Question> {
  return questions.find((q) => q.id === id) as Question;
}

interface QuestionsPage {
  params: Promise<{ id: string }>;
}

export default async function QuestionsPage({ params }: QuestionsPage) {
  const { id } = await params;
  const question = await getQuestion(id);

  if (question.screenType === SCREEN_TYPES.SINGLE_CHOICE) {
    return <SingleChoice currentQuestion={question} />;
  }

  if (question.screenType === SCREEN_TYPES.INFORMATION) {
    return <InfoScreen currentQuestion={question} />;
  }

  return <div>Oops, something went wrong 😔</div>;
}
