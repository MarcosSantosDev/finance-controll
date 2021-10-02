import { useState } from 'react';
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, TransactionTypesContatiner, RadioBox } from './styles';
interface NewTrasactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTrasactionModal = ({
  isOpen,
  onRequestClose
}: NewTrasactionModalProps) => {
  const [type, setType] = useState<'deposity' | 'withdraw'>('deposity');
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close" >
        <img src={closeImg} alt="fechar modal" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <TransactionTypesContatiner>
          <RadioBox
            type="button"
            onClick={() => setType('deposity')}
            isActive={type === 'deposity'}
            activeColors="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColors="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypesContatiner>
        <input type="text" placeholder="Categoria" />
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}

export default NewTrasactionModal;