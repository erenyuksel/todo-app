import Filter from './components/Filter'
import NewTodo from './components/NewTodo'
import TodoList from './components/TodoList'

import './App.css'

const App = () => {
  return (
    <main className="app-container">
      <h1>TODO List</h1>
      <NewTodo />
      <Filter />
      <TodoList />
    </main>
  )
}

export default App
