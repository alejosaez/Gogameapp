import {configureStore} from '@reduxjs/toolkit';
import tasksReducer from './reducers/tasksReducer';
import themeReducer from './reducers/themeSlice';
import languageReducer from './reducers/languageSlice';
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    theme: themeReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
