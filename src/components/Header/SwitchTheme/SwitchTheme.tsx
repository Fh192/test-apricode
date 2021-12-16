import React from 'react';
import moonIcon from '../../../assets/moonIcon.svg';
import sunIcon from '../../../assets/sunIcon.svg';
import { useDarkMode } from '../../../hooks';
import s from './SwitchTheme.module.scss';

export const SwitchTheme: React.FC = () => {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <button className={s.switchTheme} onClick={toggle}>
      <img src={isDarkMode ? sunIcon : moonIcon} alt='switch theme' />
    </button>
  );
};
