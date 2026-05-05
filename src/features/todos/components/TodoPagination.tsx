import React from 'react'
import { Button } from '@/components/ui/Button'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { setCurrentPage, setPageSize } from '../slice/todos.slice'
import {
  selectCurrentPage,
  selectPageSize,
  selectTotalPages,
  selectFilteredTodos,
} from '../slice/todos.selectors'
import { PAGINATION } from '@/constants'

export const TodoPagination: React.FC = () => {
  const dispatch = useAppDispatch()
  const currentPage = useAppSelector(selectCurrentPage)
  const pageSize = useAppSelector(selectPageSize)
  const totalPages = useAppSelector(selectTotalPages)
  const filteredTodos = useAppSelector(selectFilteredTodos)

  if (filteredTodos.length === 0) return null

  return (
    <div className="flex items-center justify-between gap-4 flex-wrap">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Show</span>
        <select
          value={pageSize}
          onChange={(e) => dispatch(setPageSize(Number(e.target.value)))}
          className="px-3 py-1 border border-gray-300 rounded-md text-sm"
        >
          {PAGINATION.PAGE_SIZE_OPTIONS.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        <span className="text-sm text-gray-600">per page</span>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          size="sm"
          disabled={currentPage === 1}
          onClick={() => dispatch(setCurrentPage(currentPage - 1))}
        >
          Previous
        </Button>
        <span className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="secondary"
          size="sm"
          disabled={currentPage === totalPages}
          onClick={() => dispatch(setCurrentPage(currentPage + 1))}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
