import React from 'react';
import Summary from '../../components/Summary';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Summary />
    </Container>
  );
}

export default Dashboard;