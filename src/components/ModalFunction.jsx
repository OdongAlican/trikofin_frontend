import { useState } from 'react';

const ModalFunction = () => {
  const [openModel, setOpenModal] = useState('d-none');
  const [modalText, setModalText] = useState('');

  const modalCloser = () => setOpenModal('d-none');

  const modalOpener = text => {
    setModalText(text);
    setOpenModal('');
  };

  return {
    modalCloser,
    modalOpener,
    openModel,
    modalText,
  };
};

export default ModalFunction;
