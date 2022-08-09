import { useState, useEffect } from 'react';
import axios from 'axios';

import { TodoDetail } from './TodoDetail';

export default function TodoList() {
  const [todo, setTodo] = useState([]);

  const getTodo = async () => {
    const { data } = await axios.get(`http://localhost:4000/todos/`);
    setTodo(data);
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div>
      <h3>Todos List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Responsible</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todo.map(function (t, i) {
            return <TodoDetail todo={t} key={i} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
