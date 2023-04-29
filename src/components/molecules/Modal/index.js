import React from "react";
import Modal from '../../atoms/Modal/index';
import ModalData from '../../atoms/Modal/index';

const ModalMolecule = (props) => {
  return (
    <Modal {...props.popup}>
      <ModalData {...props.popupData} />
    </Modal>
  );
};

export default ModalMolecule;
