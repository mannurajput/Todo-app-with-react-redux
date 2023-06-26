import React from 'react'
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const App = () => {
  return (
    <div className='todo'>
      <AddTodo />
      <TodoList/>
    </div>
  )
}

export default App;