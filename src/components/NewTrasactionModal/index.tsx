import Modal from 'react-modal'
import { Heading } from './styles';

interface NewTrasactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTrasactionModal = ({
  isOpen,
  onRequestClose
}: NewTrasactionModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <Heading>Cadastrar transação</Heading>
    </Modal>
  )
}

export default NewTrasactionModal;