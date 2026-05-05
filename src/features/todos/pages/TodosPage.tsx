import React from 'react'
import { MainLayout } from '@/components/layout/MainLayout'
import { Card } from '@/components/ui/Card'
import { TodoForm } from '../components/TodoForm'
import { TodoFilters } from '../components/TodoFilters'
import { TodoList } from '../components/TodoList'
import { TodoPagination } from '../components/TodoPagination'
import { TodoStats } from '../components/TodoStats'

export const TodosPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Task Manager</h1>
          <p className="text-gray-600">Stay organized and productive</p>
        </div>

        <TodoStats />

        <Card className="p-6">
          <TodoForm />
        </Card>

        <Card className="p-6">
          <TodoFilters />
        </Card>

        <Card className="p-6">
          <TodoList />
        </Card>

        <TodoPagination />
      </div>
    </MainLayout>
  )
}
