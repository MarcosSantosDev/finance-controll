import React, { useContext } from 'react';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { Transaction, TransactionsContext } from '../../context/TransactionsContext';
import { formatCurrency } from '../../utils/format';

import { Container } from './styles';


const getSummary = (transactions: Transaction[]) => {
  const summary = transactions.reduce((summaryTransactions, transaction) => {

    if (transaction.type === 'deposit') {
      return {
        ...summaryTransactions,
        deposits: summaryTransactions.deposits + transaction.amount,
        total: summaryTransactions.total + transaction.amount
      }
    }

    if (transaction.type === 'withdraw') {
      return {
        ...summaryTransactions,
        withdrawn: summaryTransactions.withdrawn + transaction.amount,
        total: summaryTransactions.total - transaction.amount
      }
    }

    return summaryTransactions
  }, {
    deposits: 0,
    withdrawn: 0,
    total: 0
  });

  return summary
}

const Summary: React.FC = () => {
  const { transactions } = useContext(TransactionsContext)

  const {
    deposits,
    withdrawn,
    total
  } = getSummary(transactions)

  return (
    <Container>
      <div>
        <header>
          <p>Entrada</p>
          <img src={incomeImg} alt="entradas" />
        </header>
        <strong>{formatCurrency(deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="saidas" />
        </header>
        <strong>{formatCurrency(withdrawn)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
          <strong>{formatCurrency(total)}</strong>
      </div>
    </Container>
  );
}

export default Summary;