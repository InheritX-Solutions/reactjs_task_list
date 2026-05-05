export const STORAGE_KEYS = {
  TODOS: 'todos',
} as const

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 5,
  PAGE_SIZE_OPTIONS: [5, 10, 20],
} as const

export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
} as const
