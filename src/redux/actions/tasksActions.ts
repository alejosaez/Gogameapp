import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Platform } from 'react-native';
import { CreateTaskPayload, Task } from '../../types/types';
const BASE_URL =
  Platform.OS === 'android'
    ? 'http://10.0.2.2:3000/tasks' // Dirección para emuladores Android
    : 'http://localhost:3000/tasks'; // Dirección para emuladores iOS o simuladores

export const fetchTasks = createAsyncThunk<Task[]>(
  'tasks/fetchTasks',
  async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  },
);


export const addTask = createAsyncThunk<Task, CreateTaskPayload>(
  'tasks/addTask',
  async (task) => {
    const response = await axios.post(BASE_URL, task);
    return response.data;
  },
);


export const updateTask = createAsyncThunk<Task, Task>(
  'tasks/updateTask',
  async (task) => {
    const { id, ...data } = task;
    const response = await axios.put(`${BASE_URL}/${id}`, data);
    return response.data;
  },
);


export const deleteTask = createAsyncThunk<number, { id: number; requestedBy: string }>(
  'tasks/deleteTask',
  async ({ id, requestedBy }) => {
    await axios.delete(`${BASE_URL}/${id}`, {
      data: { requestedBy }, 
    });
    return id;
  },
);


export const lockTask = createAsyncThunk<Task, { id: number; lockedBy: string }>(
  'tasks/lockTask',
  async ({ id, lockedBy }) => {
    const response = await axios.put(`${BASE_URL}/${id}`, {
      lockedBy, 
      lockedAt: new Date().toISOString(), 
    });
    return response.data;
  },
);


export const unlockTask = createAsyncThunk<Task, { id: number; lockedBy: string }>(
  'tasks/unlockTask',
  async ({ id, lockedBy: _ }) => { 
    const response = await axios.put(`${BASE_URL}/${id}`, {
      lockedBy: null,
      lockedAt: null,
    });
    return response.data;
  },
);
