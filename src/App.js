import Todo from './components/Todo.js';
import Modal from './components/Modal.js';
import Backdrop from './components/Backdrop.js';

function App() 
{
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React' />
      <Todo text='Master React' />
      <Todo text='Explore the React course' />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
