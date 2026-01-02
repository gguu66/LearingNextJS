'use client'
import { addTodo } from '@/actions'
import { useFormState } from 'react-dom'
import SubmitButton from './submit-button'
import ClientButton from './client-button'

const initialState={
    message:'',
    userID:'8888'
}

const userID='8888'

export default function SubmitForm() {
  //const addTodoWithOther = addTodo.bind(null,userID)
  const [state,forAction] = useFormState(addTodo,initialState)
  return (
    <>
    <div className='flex'>
      <form action={forAction}>    
        <input required type="text" name='todo' className='border p-2' />
        <SubmitButton/>
        <ClientButton>niuniu</ClientButton>
      </form>
    </div>
    <p className='mt-2 text-teal-500 text-sm'>{state.message}</p>
    </>
  )
}
        