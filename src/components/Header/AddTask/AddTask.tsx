import React, { useState } from 'react';
import { Modal } from '../../shared';
import { AddButton } from './AddButton/AddButton';
import { AddForm } from './AddForm/AddForm';

export const AddTask: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <AddButton showModal={() => setShowModal(true)} />
      <Modal visible={showModal}>
        <AddForm onCancel={() => setShowModal(false)} />
      </Modal>
    </>
  );
};
