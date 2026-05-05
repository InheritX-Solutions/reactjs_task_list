import React from 'react'
import { useAppSelector } from '@/hooks/useAppSelector'
import {
  selectTodosCount,
  selectActiveTodosCount,
  selectCompletedTodosCount,
} from '../slice/todos.selectors'
import { Card } from '@/components/ui/Card'

export const TodoStats: React.FC = () => {
  const total = useAppSelector(selectTodosCount)
  const active = useAppSelector(selectActiveTodosCount)
  const completed = useAppSelector(selectCompletedTodosCount)

  return (
    <div className="grid grid-cols-3 gap-4">
      <Card className="p-4 text-center">
        <div className="text-2xl font-bold text-blue-600">{total}</div>
        <div className="text-sm text-gray-500">Total</div>
      </Card>
      <Card className="p-4 text-center">
        <div className="text-2xl font-bold text-yellow-600">{active}</div>
        <div className="text-sm text-gray-500">Active</div>
      </Card>
      <Card className="p-4 text-center">
        <div className="text-2xl font-bold text-green-600">{completed}</div>
        <div className="text-sm text-gray-500">Completed</div>
      </Card>
    </div>
  )
}
