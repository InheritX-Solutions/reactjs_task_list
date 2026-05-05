import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '@/app/store'
import { TODO_SLICE_NAME } from '../constants'
import type { Todo } from '@/types'

const selectTodosState = (state: RootState) => state[TODO_SLICE_NAME]

export const selectTodos = createSelector([selectTodosState], (todosState) => todosState.items)

export const selectFilter = createSelector(
  [selectTodosState],
  (todosState) => todosState.filter
)

export const selectSearchQuery = createSelector(
  [selectTodosState],
  (todosState) => todosState.searchQuery
)

export const selectCurrentPage = createSelector(
  [selectTodosState],
  (todosState) => todosState.currentPage
)

export const selectPageSize = createSelector(
  [selectTodosState],
  (todosState) => todosState.pageSize
)

export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter, selectSearchQuery],
  (todos, filter, searchQuery): Todo[] => {
    let filtered = todos

    if (filter === 'active') {
      filtered = filtered.filter((t) => !t.completed)
    } else if (filter === 'completed') {
      filtered = filtered.filter((t) => t.completed)
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter((t) => t.title.toLowerCase().includes(query))
    }

    return filtered
  }
)

export const selectPaginatedTodos = createSelector(
  [selectFilteredTodos, selectCurrentPage, selectPageSize],
  (filteredTodos, currentPage, pageSize): Todo[] => {
    const startIndex = (currentPage - 1) * pageSize
    const endIndex = startIndex + pageSize
    return filteredTodos.slice(startIndex, endIndex)
  }
)

export const selectTotalPages = createSelector(
  [selectFilteredTodos, selectPageSize],
  (filteredTodos, pageSize): number => {
    return Math.ceil(filteredTodos.length / pageSize)
  }
)

export const selectTodosCount = createSelector([selectTodos], (todos): number => todos.length)

export const selectActiveTodosCount = createSelector(
  [selectTodos],
  (todos): number => todos.filter((t) => !t.completed).length
)

export const selectCompletedTodosCount = createSelector(
  [selectTodos],
  (todos): number => todos.filter((t) => t.completed).length
)
