import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react/cjs/react.production.min";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    entities: [], // array of todos
  },
  reducers: {
    todoAdded(state, action) {
      state.entities.push({
        id: uuid(), // use the uuid function to generate a unique id
        text: action.payload
      });
    },
    todoRemoved(state, action) {
      const index = state.entities.findIndex((todo) => todo.id === action.payload);
      state.entities.splice(index, 1);
    }
  },
});

export const { todoAdded, todoRemoved } = todosSlice.actions;

export default todosSlice.reducer;
