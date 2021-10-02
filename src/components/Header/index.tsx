import React, { useState } from 'react';
import Modal from 'react-modal';

import moneyImg from '../../assets/logo.svg'
import { Container, Content } from './styles';

const Header: React.FC = () => {
  const [isNewTrasactionModalOpen, setIsNewTrasactionModalOpen] = useState(false);


  const handleOpenNewTrasactionModalOpen = () => {
    setIsNewTrasactionModalOpen(true)
  }

  const handleOpenNewTrasactionModalClose = () => {
    setIsNewTrasactionModalOpen(false)
  }

  return (
    <Container>
      <Content>
        <img src={moneyImg} alt="finance controll" />
        <button onClick={handleOpenNewTrasactionModalOpen}>Nova transação</button>
        <Modal
          isOpen={isNewTrasactionModalOpen}
          onRequestClose={handleOpenNewTrasactionModalClose}
        >
          <h2>Cadastrar transação</h2>
        </Modal>
      </Content>
    </Container>
  );
}

export default Header;