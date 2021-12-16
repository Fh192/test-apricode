import classNames from 'classnames/bind';
import React from 'react';
import { useDarkMode } from '../../../hooks';
import s from './Card.module.scss';

export const Card: React.FC = ({ children }) => {
  const cx = classNames.bind(s);
  const { isDarkMode } = useDarkMode();

  return (
    <div className={cx({ card: true, cardD: isDarkMode })}>{children}</div>
  );
};
