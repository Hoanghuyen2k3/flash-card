import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '../features/quizzSlice';
import moduleReducer from '../features/moduleSlice';
import folderReducer from '../features/folderSlice';
import loginReducer from '../features/loginSlice';
export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    module: moduleReducer,
    folder: folderReducer,
    login: loginReducer
  },
});
