import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useInput } from '../hooks/useInput';

export const CreateTodo = () => {
  const [todo, setTodo] = useInput({
    description: '',
    responsible: '',
    priority: '',
    completed: false,
  });
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:4000/todos/add`, todo)
      .then((res) => console.log(res.data));

    navigate('/');
  };

  return (
    <div>
      <h3 align="center">Create New Todo</h3>
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

        <br />

        <div className="form-group">
          <input
            type="submit"
            value="Create Todo"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};
