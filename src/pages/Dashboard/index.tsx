import React from 'react';
import Summary from '../../components/Summary';
import TransactionsTable from '../../components/TransactionsTable';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}

export default Dashboard;