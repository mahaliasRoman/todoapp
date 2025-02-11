import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const LOCAL_STORAGE_KEY = 'tasks';

const loadTasksFromLocalStorage = () => {
  const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedTasks ? JSON.parse(storedTasks) : [];
};

interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

interface TodoState {
  todos: Task[];
}

const initialState: TodoState = {
  todos: loadTasksFromLocalStorage(),
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.todos.push(action.payload);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.todos));
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((task) => task.id !== action.payload);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.todos));
    },
    toggleTaskCompletion: (state, action: PayloadAction<number>) => {
      const task = state.todos.find((task) => task.id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.todos));
      }
    },
  },
});

export const { addTask, removeTask, toggleTaskCompletion } = todoSlice.actions;
export default todoSlice.reducer;
