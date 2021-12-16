import React from 'react';
import { Title } from '../../shared';
import s from './Circle.module.scss';

interface Props {
  count: number;
}

export const Circle: React.FC<Props> = ({ count }) => {
  return (
    <div className={s.circle}>
      <div className={s.count}>
        <Title fontSize='36px'>{count}</Title>
      </div>
      <span>tasks</span>
    </div>
  );
};
