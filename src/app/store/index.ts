import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '@/features/todos/slice/todos.slice'
import { TODO_SLICE_NAME } from '@/features/todos/constants'

export const store = configureStore({
  reducer: {
    [TODO_SLICE_NAME]: todosReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
