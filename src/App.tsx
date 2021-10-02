import { useState } from 'react';
import Header from './components/Header';
import NewTrasactionModal from './components/NewTrasactionModal';
import Dashboard from './pages/Dashboard'

import { GlobalStyle } from './styles/global';

export function App() {
  const [isNewTrasactionModalOpen, setIsNewTrasactionModalOpen] = useState(false);

  const handleOpenNewTrasactionModalOpen = () => {
    setIsNewTrasactionModalOpen(true)
  }

  const handleOpenNewTrasactionModalClose = () => {
    setIsNewTrasactionModalOpen(false)
  }
  
  return (
    <>
      <Header handleOpenNewTrasactionModalOpen={handleOpenNewTrasactionModalOpen} />
      <Dashboard />
      <NewTrasactionModal
        isOpen={isNewTrasactionModalOpen}
        onRequestClose={handleOpenNewTrasactionModalClose}
      />
      <GlobalStyle />
    </>
  );
}
