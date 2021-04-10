/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import styled from 'styled-components';

const ModalOuter = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalInner = styled.div`
    width: 45em;
    height: 30em;
    background: #fff;
    border: 1px solid #fff;
    margin-left: 100px;
`;

const ModalHeader = styled.div`
    height: 55px;
    width: 100%; 
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;   
    background: #062e5c;
`;

const Modal = ({ modalCloser, openModel, modalText }) => (
  <>
    <ModalOuter className={`${openModel}`}>
      <ModalInner>
        <ModalHeader>
          <div className="fa-times-circle-section">{ modalText }</div>
          <i
            onClick={modalCloser}
            className="fas fa-times-circle"
          />
        </ModalHeader>
      </ModalInner>
    </ModalOuter>
  </>
);

export default Modal;
