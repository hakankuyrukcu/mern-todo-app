import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const EditTodo = () => {
  const [todo, setTodo] = useState({
    description: '',
    responsible: '',
    priority: '',
    completed: false,
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodo = () => {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/${id}`)
        .then(({ data }) => setTodo(data))
        .catch((err) => console.log(err));
    };
    fetchTodo();
  }, [id]);

  const handleChange = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const handleChangeCheckbox = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.checked });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/update/${id}`, todo)
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
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Responsible: </label>
          <input
            type="text"
            className="form-control"
            name="responsible"
            value={todo.responsible}
            onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
            onChange={handleChangeCheckbox}
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
