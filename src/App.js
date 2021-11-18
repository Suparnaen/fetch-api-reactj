import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Users from './components/Users';
import Todo from './components/Todo';

function App() {
  const [users, setUsers] = useState([]);
  const [todos, settodos] = useState([]);
  const [userData, setUserData] = useState(true);


  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json =>
        setUsers(json)
        //console.log(json);
      )
    setUserData(true);
  }

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json =>
        settodos(json)
        //console.log(json)
      )
    setUserData(false);
  }
  return (
    <div className="App">
      <div className="topbar"></div>
      <button onClick={fetchUsers}>Users</button>
      <button onClick={fetchTodos}>Todos</button><hr /><br />

      {userData ?
        users.map((user, index) => {
          return (
            <Users key={index} user={user} />
          )
        })
        :
        todos.map((todo, index) => {
          return (
            <Todo key={index} todo={todo} />
          )
        })
      }





    </div>
  );
}

export default App;
