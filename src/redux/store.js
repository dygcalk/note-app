import { configureStore } from '@reduxjs/toolkit';
import notesSLice from './notes/notesSLice';
export const store = configureStore({
  reducer: { notes: notesSLice },
});
