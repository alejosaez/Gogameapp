import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Platform} from 'react-native';
import {CreateTaskPayload, Task} from '../../types/types';

const BASE_URL =
  Platform.OS === 'android'
    ? 'http:
    : 'http:
export const fetchTasks = createAsyncThunk<Task[]>(
  'tasks/fetchTasks',
  async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  },
);

export const addTask = createAsyncThunk<Task, CreateTaskPayload>(
  'tasks/addTask',
  async task => {
    const response = await axios.post(BASE_URL, task);
    return response.data;
  },
);

export const updateTask = createAsyncThunk<Task, Task>(
  'tasks/updateTask',
  async task => {
    const {id, ...data} = task;
    const response = await axios.put(`${BASE_URL}/${id}`, data);
    return response.data;
  },
);

export const deleteTask = createAsyncThunk<number, number>(
  'tasks/deleteTask',
  async id => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
  },
);
