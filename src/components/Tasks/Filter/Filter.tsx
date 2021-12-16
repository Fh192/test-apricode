import React, { useEffect, useState } from 'react';
import { useDarkMode } from '../../../hooks';
import { ITasksFilter } from '../../../types';
import s from './Filter.module.scss';

interface Props {
  filter: ITasksFilter;
  setFilter: React.Dispatch<React.SetStateAction<ITasksFilter>>;
}

export const Filter: React.FC<Props> = ({ filter, setFilter }) => {
  const [selectWidth, setSelectWidth] = useState('100px');
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    setSelectWidth(
      filter === 'All' ? '30px' : filter === 'Active' ? '60px' : '100px'
    );
  }, [filter]);

  return (
    <div className={s.filter}>
      <select
        className={isDarkMode ? s.dark : ''}
        style={{ width: selectWidth }}
        value={filter}
        onChange={e => setFilter(e.target.value as ITasksFilter)}
      >
        <option value='All'>All</option>
        <option value='Active'>Active</option>
        <option value='Completed'>Completed</option>
      </select>
    </div>
  );
};
