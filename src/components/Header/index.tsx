import React from 'react';

import moneyImg from '../../assets/logo.svg'
import { Container, Content } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={moneyImg} alt="finance controll" />
        <button>Nova transação</button>
      </Content>
    </Container>
  );
}

export default Header;