'use client';
import style from './style.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTodo } from '@/store/todoSlice';
import { Button } from '@/ui/button';

export const AddTodoForm = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const resetInputValue = () => {
    setInputValue('');
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(addTodo(inputValue));
    resetInputValue();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.inputWrapper}>
        <input
          className={style.input}
          value={inputValue}
          onChange={handleChange}
          type="text"
        />
      </div>
      <div className={style.buttonWrapper}>
        <Button type="submit" size="regular" disabled={!inputValue}>
          Add todo
        </Button>
      </div>
    </form>
  );
};
