import type { Todo, TodoFilter } from '@/types'

export type TodosState = {
  items: Todo[]
  filter: TodoFilter
  searchQuery: string
  currentPage: number
  pageSize: number
}
