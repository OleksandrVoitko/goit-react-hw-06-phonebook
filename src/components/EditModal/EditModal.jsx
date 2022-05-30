import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { editing } from 'redux/editing/slice';
import cl from './EditModal.module.css';

const EditModal = ({ children }) => {
  const dispatch = useDispatch();
  const isEditing = useSelector(state => state.isEditing);

  const rootClasses = [cl.editModal];
  if (isEditing) {
    rootClasses.push(cl.active);
  }

  const closeModal = () => {
    dispatch(editing(false));
  };

  return (
    <div
      className={rootClasses.join(' ')}
      onClick={() => {
        closeModal();
      }}
    >
      <div className={cl.editModalContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default EditModal;
