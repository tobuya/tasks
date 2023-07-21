import { Toaster } from 'react-hot-toast'
import { TodoList, AddTodo } from './components'

function App() {
  return (
    <div>
      <Toaster position='bottom-center' />
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App
