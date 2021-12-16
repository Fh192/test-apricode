import classNames from 'classnames/bind';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useDarkMode } from '../hooks';
import s from './App.module.scss';
import { Header } from './Header/Header';
import { Statistics } from './Statistics/Statistics';
import { Tasks } from './Tasks/Tasks';

export const App: React.FC = observer(() => {
  const cx = classNames.bind(s);
  const { isDarkMode } = useDarkMode();

  return (
    <div className={cx({ App: true, AppD: isDarkMode })}>
      <div className={s.container}>
        <Header />
        <Statistics />
        <Tasks />
      </div>
    </div>
  );
});
