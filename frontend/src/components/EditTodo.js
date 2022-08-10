import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useInput } from '../hooks/useInput';

export const EditTodo = () => {
  const [todo, setTodo] = useInput({
    description: '',
    responsible: '',
    priority: '',
    completed: false,
  });
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchTodo = () => {
    axios
      .get(`http://localhost:4000/todos/${id}`)
      .then(({ data }) => setTodo(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:4000/todos/update/${id}`, todo)
      .then((res) => console.log(res.data));

    navigate('/');
  };

  return (
    <div>
      <h3 align="center">Update Todo</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={todo.description}
            onChange={setTodo}
          />
        </div>
        <div className="form-group">
          <label>Responsible: </label>
          <input
            type="text"
            className="form-control"
            name="responsible"
            value={todo.responsible}
            onChange={setTodo}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priority"
              id="priorityLow"
              value="Low"
              checked={todo.priority === 'Low'}
              onChange={setTodo}
            />
            <label className="form-check-label">Low</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priority"
              id="priorityMedium"
              value="Medium"
              checked={todo.priority === 'Medium'}
              onChange={setTodo}
            />
            <label className="form-check-label">Medium</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priority"
              id="priorityHigh"
              value="High"
              checked={todo.priority === 'High'}
              onChange={setTodo}
            />
            <label className="form-check-label">High</label>
          </div>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            id="completedCheckbox"
            type="checkbox"
            name="completed"
            onChange={setTodo}
            checked={todo.completed}
            value={todo.completed}
          />
          <label className="form-check-label" htmlFor="completedCheckbox">
            Completed
          </label>
        </div>

        <br />

        <div className="form-group">
          <input
            type="submit"
            value="Update Todo"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};
