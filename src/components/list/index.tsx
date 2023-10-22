'use client';
import style from './style.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { removeTodo, toggleTodo } from '@/store/todoSlice';
import { Todo } from '@/components/todo';

export const List = () => {
  const todos = useSelector((state: RootState) => state.todos.value);
  const dispatch = useDispatch();

  return (
    <>
      {todos.length ? (
        <ul className={style.list}>
          {todos.map((todo) => (
            <li key={todo.id} className={style.item}>
              <Todo
                title={todo.title}
                completed={todo.completed}
                onRemove={() => dispatch(removeTodo(todo.id))}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />
            </li>
          ))}
        </ul>
      ) : (
        <h2 className={style.message}>
          List is empty. Please create your first todo
        </h2>
      )}
    </>
  );
};
