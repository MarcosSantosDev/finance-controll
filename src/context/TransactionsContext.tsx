import { AxiosResponse } from 'axios';
import { createContext, ReactNode, useEffect, useState, useContext } from 'react';
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

export type TransactionBody = Omit<Transaction, 'id'>;

export interface TransactionResponse {
  transactions: Transaction[];
}

interface TransactionsProviderProps {
  children: ReactNode
}

export interface TransactionsContextProps {
  transactions: Transaction[];
  createTransation: (transactionInput: TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionsContextProps>(
  {} as TransactionsContextProps
)

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const createTransation = async (transactionInput: TransactionInput) => {
    const response = await api.post<TransactionBody, AxiosResponse<{ transaction: Transaction }>>('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    });

    const { transaction } = response.data

    setTransactions(transactions => ([
      ...transactions,
      transaction
    ]))
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

export const useTransactions = () => {
  const context = useContext(TransactionsContext)
  return context
}