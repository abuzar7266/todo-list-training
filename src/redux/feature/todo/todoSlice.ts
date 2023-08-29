import { createSlice } from "@reduxjs/toolkit";
import { InitialTodoState } from "interfaces";
const initialState: InitialTodoState = {
  taskList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    fetchTodoSuccess: (state, action) => {
      return {
        ...state,
        taskList: [...action.payload],
      };
    },
    fetchTodo: (state, action) => {
      return {
        ...state,
      };
    },
    addTask: (state, action) => {
      return {
        ...state,
      };
    },
    updateTask: (state, action) => {
      return {
        ...state,
      };
    },
    deleteTask: (state, action) => {
      return {
        ...state,
      };
    },
    taskMarkdone: (state, action) => {
      return {
        ...state,
      };
    },
  },
});
export const {
  addTask,
  updateTask,
  deleteTask,
  taskMarkdone,
  fetchTodoSuccess,
  fetchTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
