import React from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { toggleTodo, deleteTodo } from '../slice/todos.slice'
import type { Todo } from '@/types'

interface TodoItemProps {
  todo: Todo
  onEdit: () => void
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onEdit }) => {
  const dispatch = useAppDispatch()

  return (
    <Card className="p-4 flex items-center gap-3">
      <button
        onClick={() => dispatch(toggleTodo(todo.id))}
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all-200 ${
          todo.completed ? 'bg-green-500 border-green-500' : 'border-gray-300 hover:border-blue-500'
        }`}
      >
        {todo.completed && (
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>
      <span
        className={`flex-1 ${
          todo.completed ? 'text-gray-500 line-through' : 'text-gray-900'
        }`}
      >
        {todo.title}
      </span>
      <div className="flex gap-2">
        <Button variant="ghost" size="sm" onClick={onEdit}>
          Edit
        </Button>
        <Button variant="danger" size="sm" onClick={() => dispatch(deleteTodo(todo.id))}>
          Delete
        </Button>
      </div>
    </Card>
  )
}
