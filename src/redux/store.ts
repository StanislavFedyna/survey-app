import { combineReducers, configureStore } from '@reduxjs/toolkit';
import questionnaireReducer from './slices/questionnaireSlice';

const rootReducer = combineReducers({
  questionnaire: questionnaireReducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
