import React, { useRef, useState } from 'react';
import { useOnClickOutside } from '../../../../hooks';
import { todoList } from '../../../../store/todoList';
import { Button, Card } from '../../../shared';
import { Title } from '../../../shared/Title/Title';
import s from './AddForm.module.scss';

interface Props {
  onCancel: () => void;
}

export const AddForm: React.FC<Props> = ({ onCancel }) => {
  const ref = useRef<HTMLFormElement>(null);

  const { addTask } = todoList;
  const [title, setTitle] = useState('');

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addTask(title);
    setTitle('');

    onCancel();
  };

  useOnClickOutside(ref, onCancel);

  return (
    <Card>
      <form onSubmit={submitHandler} className={s.form} ref={ref}>
        <Title>Add new task</Title>
        <div className={s.field}>
          <label htmlFor='title'>Task title</label>
          <input
            type='text'
            id='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className={s.buttons}>
          <Button title='Cancel' type='danger' onClick={onCancel} />
          <Button
            title='Add'
            type='success'
            htmlType='submit'
            disabled={!title.length}
          />
        </div>
      </form>
    </Card>
  );
};
