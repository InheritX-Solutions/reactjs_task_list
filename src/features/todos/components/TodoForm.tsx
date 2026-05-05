import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { todoSchema, type TodoFormData } from '../validation/todo.schema'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { addTodo } from '../slice/todos.slice'

export const TodoForm: React.FC = () => {
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TodoFormData>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: '',
    },
  })

  const onSubmit = (data: TodoFormData) => {
    dispatch(addTodo(data.title))
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-3">
      <Input
        {...register('title')}
        placeholder="Add a new task..."
        error={errors.title?.message}
        className="flex-1"
        autoComplete="off"
      />
      <Button type="submit" disabled={isSubmitting}>
        Add
      </Button>
    </form>
  )
}
