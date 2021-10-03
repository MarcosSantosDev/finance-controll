import React, { useEffect, useState } from 'react';
import api from '../../services/api'
import { formatCurrency, formatDate } from '../../utils/format';
import { Container } from './styles';

interface Transaction {
  id: number;
  title: string;
  type: 'deposit' | 'withDraw';
  category: string;
  amount: number;
  createdAt: Date;
}

interface TransactionResponse {
  transactions: Transaction[];
}

const getTransactionClassByType = (type: 'deposit' | 'withDraw') => {
  return type === 'deposit' ? 'deposit' : 'withDraw'
}

const TransactionsTable: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get<TransactionResponse>('transactions')
    .then((response) => response.data)
    .then((data) => setTransactions(data.transactions))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
        {
          transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={getTransactionClassByType(transaction.type)}>
                {formatCurrency(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{formatDate(transaction.createdAt)}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </Container>
  );
}

export default TransactionsTable;