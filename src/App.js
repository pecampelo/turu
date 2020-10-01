import React, { useState, useCallback, useEffect} from 'react';

// class component
//
// class App extends React.Component {
//   render() {
//
//   }
// }

// a different
// function App() { // functional component
//   return (
//     <div className="App">
//       <h1> Hello World! </h1>
//     </div>
//   );
// }

// const App = () => (
//     <div className="App">
//       <h1> Hello World! </h1>
//     </div>
// )

const App = () => {
  const [newTodo, setNewTodo] = useState(''); // returns an array with two values;
  const [todos, setTodos] = useState([])

  const onNewTodoChange = useCallback((event) => {
    setNewTodo(event.target.value)
  }, []);

  const formSubmitted = useCallback((event) => {
    event.preventDefault();
    // todos.push({}) React wouldn't know the array has changed.
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        content: newTodo,
        done: false
      }
    ])
  }, [newTodo, todos]);

  useEffect(() => {

    console.log('todos', todos)
    
  }, [todos])

  return (
      <div className="App">
        <form onSubmit={formSubmitted}>
          <label htmlFor='newTodo'>Enter a todo</label>
          <input
            id='newTodo'
            name='newTodo'
            value={newTodo}
            onChange={onNewTodoChange}
          />
          <button>Add Todo</button>
        </form>
      </div>
  )
}

export default App;
