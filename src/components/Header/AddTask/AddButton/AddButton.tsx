import React from 'react';
import addIcon from '../../../../assets/addIcon.svg';
import s from './AddButton.module.scss';

interface Props {
  showModal: () => void;
}

export const AddButton: React.FC<Props> = ({ showModal }) => {
  return (
    <button className={s.addTaskButton} onClick={showModal}>
      <img src={addIcon} alt='' />
      <span>Add task</span>
    </button>
  );
};
