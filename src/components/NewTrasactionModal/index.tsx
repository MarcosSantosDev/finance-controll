import { FormEvent, useState } from 'react';
import Modal from 'react-modal'
import api from '../../services/api'

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
  const [title, setTitle] = useState<string>('');
  const [value, setValue] = useState<number>();
  const [type, setType] = useState<'deposity' | 'withdraw'>('deposity');
  const [category, setCategory] = useState<string>();
  
  const handleCreateNewTransaction = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTrasaction = {
      title,
      value,
      type,
      category,
    }

    api.post('transactions', newTrasaction)
  }

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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)} />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))} />
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
        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}  />
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}

export default NewTrasactionModal;