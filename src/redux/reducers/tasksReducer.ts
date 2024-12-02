import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  fetchTasks,
  addTask,
  updateTask,
  deleteTask,
} from '../actions/tasksActions';
import {initialState, Task} from '../../types/types';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, state => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.loading = false;
        state.allTasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching tasks';
      })
      .addCase(addTask.fulfilled, (state, action: PayloadAction<Task>) => {
        state.allTasks.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action: PayloadAction<Task>) => {
        const index = state.allTasks.findIndex(
          task => task.id === action.payload.id,
        );
        if (index !== -1) {
          state.allTasks[index] = action.payload;
        }
      })
      .addCase(deleteTask.fulfilled, (state, action: PayloadAction<number>) => {
        state.allTasks = state.allTasks.filter(
          task => task.id !== action.payload,
        );
      });
  },
});
export const {clearError} = tasksSlice.actions;
export default tasksSlice.reducer;
