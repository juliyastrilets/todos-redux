import { createSlice } from '@reduxjs/toolkit';

type ITodo = {
  id: number;
  title: string;
  completed: boolean;
};
interface TodosState {
  value: ITodo[];
}

const initialState: TodosState = {
  value: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.value.push({
        id: state.value.length + 1,
        title: action.payload,
        completed: false,
      });
    },
    removeTodo(state, action) {
      state.value = state.value.filter(
        (todo) => todo.id !== action.payload,
      );
    },
    toggleTodo(state, action) {
      const toggledTodo = state.value.find(
        (todo) => todo.id === action.payload,
      );
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
