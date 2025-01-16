export const questionnaireConfig = [
  {
    id: '1',
    title: 'What is your gender?',
    answers: ['Male', 'Female', 'Other'],
    next: {
      Male: '2',
      Female: '2',
      Other: '3',
    },
  },
  {
    id: '2',
    title: 'What is your favorite color?',
    answers: ['Red', 'Blue', 'Green'],
    next: {
      Red: '3',
      Blue: '3',
      Green: '3',
    },
  },
  {
    id: '3',
    title: 'Thank you for completing the survey!',
    answers: [],
    next: null,
  },
];
