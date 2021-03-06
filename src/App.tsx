import { useState } from 'react';
import Modal from 'react-modal';
import Header from './components/Header';
import NewTrasactionModal from './components/NewTrasactionModal';
import Dashboard from './pages/Dashboard'
import { TransactionsProvider } from './context/TransactionsContext'

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root')

export function App() {
  const [isNewTrasactionModalOpen, setIsNewTrasactionModalOpen] = useState(false);

  const handleOpenNewTrasactionModalOpen = () => {
    setIsNewTrasactionModalOpen(true)
  }

  const handleOpenNewTrasactionModalClose = () => {
    setIsNewTrasactionModalOpen(false)
  }
  
  return (
    <TransactionsProvider>
      <Header handleOpenNewTrasactionModalOpen={handleOpenNewTrasactionModalOpen} />
      <Dashboard />
      <NewTrasactionModal
        isOpen={isNewTrasactionModalOpen}
        onRequestClose={handleOpenNewTrasactionModalClose}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
