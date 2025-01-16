import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuestionnaireState {
  userAnswers: any[];
}

const initialState: QuestionnaireState = {
  userAnswers: [],
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    setAnswer: (
      state,
      action: PayloadAction<{ questionId: string; answer: string }>,
    ) => {
      console.log('setAnswer');

      state.userAnswers[action.payload.questionId] = action.payload.answer;
    },
  },
});

export const { setAnswer } = questionnaireSlice.actions;

export default questionnaireSlice.reducer;
