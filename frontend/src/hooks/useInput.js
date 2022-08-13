import { useState } from 'react';

export const useInput = (params) => {
  const [todo, setTodo] = useState(params);

  const changeTodo = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  return [todo, changeTodo];
};
