import React from 'react';
import { animated, SpringValue } from 'react-spring';
import deleteIcon from '../../../assets/deleteIcon.svg';
import { todoList } from '../../../store/todoList';
import { ITask } from '../../../types';
import { CheckBox } from '../../shared';
import s from './Task.module.scss';

interface Props extends ITask {
  style: {
    opacity: SpringValue<number>;
    margin: SpringValue<string>;
  };
}

export const Task: React.FC<Props> = ({ style, title, completed, id }) => {
  const { toggleTask, deleteTask } = todoList;

  return (
    <animated.li className={s.task} style={style}>
      <div className={s.content}>
        <CheckBox checked={completed} id={id} toggle={() => toggleTask(id)} />
        <h3 className={s.title} title={title}>
          {title}
        </h3>
      </div>

      <button className={s.delete} onClick={() => deleteTask(id)}>
        <img src={deleteIcon} alt='delete' />
      </button>
    </animated.li>
  );
};
