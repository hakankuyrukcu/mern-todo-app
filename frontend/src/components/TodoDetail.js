import { Link } from 'react-router-dom';

export function TodoDetail({ todo, deleteAction }) {
  return (
    <tr>
      <td className={todo.completed ? 'completed' : ''}>{todo.description}</td>
      <td className={todo.completed ? 'completed' : ''}>{todo.responsible}</td>
      <td className={todo.completed ? 'completed' : ''}>{todo.priority}</td>
      <td>
        <Link className="btn btn-info m-1" to={'/edit/' + todo._id}>
          Edit
        </Link>
        <button
          className="btn btn-danger m-1"
          onClick={(event) => deleteAction(todo._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
