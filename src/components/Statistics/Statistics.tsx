import { observer } from 'mobx-react-lite';
import React from 'react';
import { todoList } from '../../store/todoList';
import { IStatistics } from '../../types';
import { Card, Title } from '../shared';
import { Circle } from './Circle/Circle';
import s from './Statistics.module.scss';

export const Statistics: React.FC = observer(() => {
  const { statistics, resetStatistics } = todoList;

  return (
    <Card>
      <div className={s.header}>
        <Title>Your statistics</Title>
        <button className={s.resetBtn} onClick={resetStatistics}>
          Reset statistics
        </button>
      </div>

      <ul className={s.statistics}>
        {(Object.keys(statistics) as Array<keyof IStatistics>).map(
          statistic => (
            <li className={s.item} key={statistic}>
              <h3>{statistic}</h3>
              <Circle count={statistics[statistic]} />
            </li>
          )
        )}
      </ul>
    </Card>
  );
});
