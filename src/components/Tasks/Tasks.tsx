import React, { useState } from 'react';
import { ITasksFilter } from '../../types';
import { Card, Title } from '../shared';
import { Filter } from './Filter/Filter';
import s from './Tasks.module.scss';
import { TasksList } from './TasksList';

export const Tasks: React.FC = () => {
  const [filter, setFilter] = useState<ITasksFilter>('All');

  return (
    <Card>
      <div className={s.header}>
        <Filter filter={filter} setFilter={setFilter} />
        <Title>tasks</Title>
      </div>
      <TasksList filter={filter} />
    </Card>
  );
};
