import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { CreateTodo } from './components/CreateTodo';
import { EditTodo } from './components/EditTodo';
import { TodosList } from './components/TodosList';

import logo from './logo.png';

function App() {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a
            className="navbar-brand"
            href={process.env.REACT_APP_BRAND_URL}
            target="_blank"
            rel="noreferrer"
          >
            <img src={logo} width="30" height="30" alt="HakemSoft.com" />
          </a>
          <Link to="/" className="navbar-brand">
            {process.env.REACT_APP_NAME}
          </Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  Todos
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Create Todo
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" exact element={<TodosList />} />
          <Route path="/edit/:id" element={<EditTodo />} />
          <Route path="/create" element={<CreateTodo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
