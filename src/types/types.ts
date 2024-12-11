export interface CreateTaskPayload {
  title: string;
  content?: string;
}

export interface Task {
  id: number;
  title: string;
  content: string;
}

interface TasksState {
  allTasks: Task[];
  loading: boolean;
  error: string | null;
}

export const initialState: TasksState = {
  allTasks: [],
  loading: false,
  error: null,
};
