import { useState } from 'react';
import './App.css';
import Tick from './Tick';

const App = () => {
  const [tasks, setTasks] = useState([
    { name: 'Walk dog', complete: false },
    { name: 'Buy milk', complete: true }
  ]);

  const [input, setInput] = useState('');

  const changeInput = (event) => {
    setInput(event.target.value);
  }

  const createTask = () => {
    if (input == '') {
      return;
    }

    setTasks([
      ...tasks,
      { name: input, complete: false }
    ]);

    setInput('');
  }

  const onKeyUp = (event) => {
    if (event.key == 'Enter') {
      createTask();
    }
  }

  const toggleComplete = (index) => {
    const newTasks = [ ...tasks ];
    newTasks[index].complete = !newTasks[index].complete;
    setTasks(newTasks);
  }

  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((task, index) => {
      return index != indexToDelete;
    }));
  } 

  return (
    <div className="container">
      <h1>My Todo List</h1>

      <div className="add-task-container">
        <input
          type="text"
          placeholder="Add new task..."
          className="task-input"
          onChange={changeInput}
          value={input}
          onKeyUp={onKeyUp}
        />

        <button className="add-task-btn" onClick={createTask}>Add task</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li 
            key={index} 
            className={task.complete ? 'ticked' : ''} 
            onClick={() => toggleComplete(index)}
            onDoubleClick={() => deleteTask(index)}
          >
            {task.complete && <Tick />}
            {task.name}
          </li>
        ))}
      </ul>

      <p className="help-text">
        Click a task to mark it complete, or double-click to remove.
      </p>
    </div>
  );
}

export default App;
