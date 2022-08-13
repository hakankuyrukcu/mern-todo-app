import { useState, useEffect } from 'react';
import axios from 'axios';

import { TodoDetail } from './TodoDetail';

export const TodosList = () => {
  const [todos, setTodos] = useState([]);

  const getTodoList = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/`);
    setTodos(data);
  };

  useEffect(() => {
    getTodoList();
  }, []);

  const deleteTodo = (_id) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/delete/${_id}`)
      .then((res) => getTodoList());
  };

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
          {todos.map(function (t, i) {
            return <TodoDetail todo={t} key={i} deleteAction={deleteTodo} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
