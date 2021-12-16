import { observer } from 'mobx-react-lite';
import React from 'react';
import { useTransition } from 'react-spring';
import { todoList } from '../../store/todoList';
import { ITasksFilter } from '../../types';
import { Task } from './Task/Task';
import s from './Tasks.module.scss';

interface Props {
  filter: ITasksFilter;
}

export const TasksList: React.FC<Props> = observer(({ filter }) => {
  const { tasks, completedTasks, activeTasks } = todoList;

  const transition = useTransition(
    filter === 'Active'
      ? activeTasks
      : filter === 'Completed'
      ? completedTasks
      : tasks,
    {
      from: { opacity: 0, margin: '0px 0px' },
      enter: { opacity: 1, margin: '5px 0px' },
      leave: { opacity: 0, margin: '-20px 0px' },
      config: { duration: 300 },
    }
  );

  return (
    <ul className={s.tasksList}>
      {transition((style, task) =>
        task ? <Task {...task} style={style} /> : null
      )}
    </ul>
  );
});
