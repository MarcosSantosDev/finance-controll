import moneyImg from '../../assets/logo.svg'
import { Container, Content } from './styles';

interface HeaderProps {
  handleOpenNewTrasactionModalOpen: () => void;
}

const Header = ({
  handleOpenNewTrasactionModalOpen
}: HeaderProps) => (
  <Container>
    <Content>
      <img src={moneyImg} alt="finance controll" />
      <button onClick={handleOpenNewTrasactionModalOpen}>Nova transação</button>
    </Content>
  </Container>
);

export default Header;