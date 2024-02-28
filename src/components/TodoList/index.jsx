import { useSelector } from 'react-redux'

import TodoListItem from './TodoListItem'
import './styles.css'

const TodoList = () => {
  const todos = useSelector((state) => state.todos.items)
  const filter = useSelector((state) => state.filter.selected)

  let filteredTodos = todos
  if (filter === 'completed') {
    filteredTodos = todos.filter((todo) => todo.completed)
  } else if (filter === 'uncompleted') {
    filteredTodos = todos.filter((todo) => !todo.completed)
  }

  return (
    <ul className="todo-list_container">
      {filteredTodos.map((todo) => {
        return <TodoListItem key={todo.id} todo={todo} />
      })}
    </ul>
  )
}

export default TodoList
