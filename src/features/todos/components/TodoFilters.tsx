import React from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { setFilter, setSearchQuery } from '../slice/todos.slice'
import { selectFilter, selectSearchQuery } from '../slice/todos.selectors'
import type { TodoFilter } from '@/types'

const filters: { value: TodoFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
]

export const TodoFilters: React.FC = () => {
  const dispatch = useAppDispatch()
  const filter = useAppSelector(selectFilter)
  const searchQuery = useAppSelector(selectSearchQuery)

  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />
      <div className="flex gap-2">
        {filters.map((f) => (
          <Button
            key={f.value}
            variant={filter === f.value ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => dispatch(setFilter(f.value))}
          >
            {f.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
