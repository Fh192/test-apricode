import { useContext } from 'react';
import { DarkModeContext } from '../providers/DarkModeProvider';

export const useDarkMode = () => useContext(DarkModeContext);
