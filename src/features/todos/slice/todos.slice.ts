import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { TODO_SLICE_NAME } from '../constants'
import type { TodosState } from '../types'
import type { Todo, TodoFilter } from '@/types'
import { storageService } from '@/services/storage.service'
import { STORAGE_KEYS } from '@/constants'
import { generateId } from '@/utils'

const initialState: TodosState = {
  items: storageService.get<Todo[]>(STORAGE_KEYS.TODOS) || [],
  filter: 'all',
  searchQuery: '',
  currentPage: 1,
  pageSize: 5,
}

const todosSlice = createSlice({
  name: TODO_SLICE_NAME,
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: generateId(),
        title: action.payload,
        completed: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      state.items.unshift(newTodo)
      storageService.set(STORAGE_KEYS.TODOS, state.items)
    },
    updateTodo: (state, action: PayloadAction<{ id: string; title: string }>) => {
      const todo = state.items.find((t) => t.id === action.payload.id)
      if (todo) {
        todo.title = action.payload.title
        todo.updatedAt = new Date().toISOString()
        storageService.set(STORAGE_KEYS.TODOS, state.items)
      }
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.items.find((t) => t.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
        todo.updatedAt = new Date().toISOString()
        storageService.set(STORAGE_KEYS.TODOS, state.items)
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((t) => t.id !== action.payload)
      storageService.set(STORAGE_KEYS.TODOS, state.items)
    },
    setFilter: (state, action: PayloadAction<TodoFilter>) => {
      state.filter = action.payload
      state.currentPage = 1
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
      state.currentPage = 1
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload
      state.currentPage = 1
    },
  },
})

export const {
  addTodo,
  updateTodo,
  toggleTodo,
  deleteTodo,
  setFilter,
  setSearchQuery,
  setCurrentPage,
  setPageSize,
} = todosSlice.actions

export default todosSlice.reducer
