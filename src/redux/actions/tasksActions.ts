import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Platform} from 'react-native';
import {CreateTaskPayload, Task} from '../../types/types';


const BASE_URL =
  Platform.OS === 'android'
    ? 'http://10.0.2.2:3000/tasks'
    : 'http://localhost:3000/tasks';


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


export const updateTask = createAsyncThunk<Task, {id: number; title: string}>(
  'tasks/updateTask',
  async ({id, title}) => {
    const response = await axios.put(`${BASE_URL}/${id}`, {title});
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
