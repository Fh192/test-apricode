import React from 'react';
import { AddTask } from './AddTask/AddTask';
import s from './Header.module.scss';
import { SwitchTheme } from './SwitchTheme/SwitchTheme';

export const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <AddTask />
      <SwitchTheme />
    </header>
  );
};
