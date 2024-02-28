import { useDispatch } from 'react-redux'

import { remove_todo, toggle_completed } from '../../../store/slices/todoSlice'
import './styles.css'

const TodoListItem = ({ todo }) => {
  const dispatch = useDispatch()

  const removeHandler = (e) => {
    e.stopPropagation()
    dispatch(remove_todo(todo.id))
  }

  const toggleCompletedHandler = () => {
    dispatch(toggle_completed(todo.id))
  }

  return (
    <li
      className={`todo-list-item ${
        todo.completed ? 'todo-list-item_completed' : ''
      }`}
      onClick={toggleCompletedHandler}
    >
      <span>{todo.content}</span>
      <button onClick={removeHandler}>X</button>
    </li>
  )
}

export default TodoListItem
