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
  const { tasks: allTasks, completedTasks, activeTasks } = todoList;
  const tasks =
    filter === 'Active'
      ? activeTasks
      : filter === 'Completed'
      ? completedTasks
      : allTasks;

  const noTasksMessage = `No ${
    filter !== 'All' ? filter.toLowerCase() : ''
  } tasks ${filter !== 'Active' ? 'yet' : ''}`;

  const transition = useTransition(tasks, {
    from: { opacity: 0, margin: '0px 0px' },
    enter: { opacity: 1, margin: '5px 0px' },
    leave: { opacity: 0, margin: '-20px 0px' },
    config: { duration: 300 },
  });

  return (
    <ul className={s.tasksList}>
      {tasks.length === 0 && <h3 className={s.noTasks}>{noTasksMessage}</h3>}

      {transition((style, task) =>
        task ? <Task {...task} style={style} /> : null
      )}
    </ul>
  );
});
