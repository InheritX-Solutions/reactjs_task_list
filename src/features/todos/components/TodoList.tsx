import React, { useState } from 'react'
import { TodoItem } from './TodoItem'
import { EditTodoModal } from './EditTodoModal'
import { useAppSelector } from '@/hooks/useAppSelector'
import { selectPaginatedTodos } from '../slice/todos.selectors'
import type { Todo } from '@/types'

export const TodoList: React.FC = () => {
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null)
  const todos = useAppSelector(selectPaginatedTodos)

  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <svg
          className="w-16 h-16 mx-auto text-gray-400 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        <h3 className="text-lg font-medium text-gray-900 mb-1">No tasks found</h3>
        <p className="text-gray-500">Add a new task to get started</p>
      </div>
    )
  }

  return (
    <>
      <div className="space-y-3">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onEdit={() => setEditingTodo(todo)} />
        ))}
      </div>
      {editingTodo && (
        <EditTodoModal todo={editingTodo} onClose={() => setEditingTodo(null)} />
      )}
    </>
  )
}
