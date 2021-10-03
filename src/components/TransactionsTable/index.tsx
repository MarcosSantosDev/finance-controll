import { useTransactions } from '../../context/TransactionsContext';
import { formatCurrency, formatDate } from '../../utils/format';
import { Container } from './styles';

const TransactionsTable: React.FC = () => {
  const { transactions } = useTransactions()

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
              <td className={transaction.type}>
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