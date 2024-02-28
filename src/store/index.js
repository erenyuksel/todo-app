import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './slices/filterSlice'
import todosReducer from './slices/todoSlice'

export default configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer,
  },
})
