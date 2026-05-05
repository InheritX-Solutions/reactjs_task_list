import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { todoSchema, type TodoFormData } from '../validation/todo.schema'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { updateTodo } from '../slice/todos.slice'
import type { Todo } from '@/types'

interface EditTodoModalProps {
  todo: Todo
  onClose: () => void
}

export const EditTodoModal: React.FC<EditTodoModalProps> = ({ todo, onClose }) => {
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<TodoFormData>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: todo.title,
    },
  })

  useEffect(() => {
    setValue('title', todo.title)
  }, [todo, setValue])

  const onSubmit = (data: TodoFormData) => {
    dispatch(updateTodo({ id: todo.id, title: data.title }))
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4">Edit Task</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            {...register('title')}
            placeholder="Task title..."
            error={errors.title?.message}
          />
          <div className="flex gap-3 justify-end">
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              Save
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
