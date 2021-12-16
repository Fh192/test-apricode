import React from 'react';
import s from './CheckBox.module.scss';

interface Props {
  id: string | number;
  checked: boolean;
  toggle: () => void;
}

export const CheckBox: React.FC<Props> = ({ checked, id, toggle }) => {
  return (
    <label htmlFor={`checkbox-${id}`} className={s.checkbox}>
      <input
        type='checkbox'
        id={`checkbox-${id}`}
        checked={checked}
        onChange={toggle}
      />
    </label>
  );
};
