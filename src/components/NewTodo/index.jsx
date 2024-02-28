import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add_todo } from '../../store/slices/todoSlice'
import './styles.css'

const NewTodo = () => {
  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch()

  const handleAddTodo = (e) => {
    e.preventDefault()
    if (newTodo.trim()) {
      dispatch(add_todo(newTodo.trim()))
      setNewTodo('')
    }
  }

  const handleNewTodoChange = (e) => {
    const newTodo = e.currentTarget.value
    setNewTodo(newTodo)
  }

  return (
    <form className="new-todo_form" onSubmit={handleAddTodo}>
      <input
        className="new-todo_input"
        type="text"
        placeholder="Add your todo"
        value={newTodo}
        onChange={handleNewTodoChange}
      />

      <button type="submit" className="new-todo_button">
        Add
      </button>
    </form>
  )
}

export default NewTodo
