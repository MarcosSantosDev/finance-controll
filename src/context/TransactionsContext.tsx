import { createContext, ReactNode, useEffect, useState } from 'react';
import api from '../services/api';

export interface Transaction {
  id: number;
  title: string;
  type: 'deposit' | 'withdraw';
  category: string;
  amount: number;
  createdAt: Date;
}

export type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

export interface TransactionResponse {
  transactions: Transaction[];
}

interface TransactionsProviderProps {
  children: ReactNode
}

export interface TransactionsContextProps {
  transactions: Transaction[];
  createTransation: (transaction: TransactionInput) => void
}

export const TransactionsContext = createContext<TransactionsContextProps>(
  {} as TransactionsContextProps
)

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const createTransation = (transaction: TransactionInput) => {
    api.post('/transactions', transaction)
  }

  useEffect(() => {
    api.get<TransactionResponse>('transactions')
    .then((response) => response.data)
    .then((data) => setTransactions(data.transactions))
  }, [])

  return (
    <TransactionsContext.Provider value={{
      transactions,
      createTransation
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}