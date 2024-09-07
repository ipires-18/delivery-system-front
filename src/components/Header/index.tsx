import logo from '../../assets/images/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  title:string
  subtitle:string
}

export function Header({ title, subtitle }:HeaderProps) {
  return (
    <Container>
      <Content>
        <div className="details">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
        <img src={logo} alt="Waiter App logo" width={200} height={200}/>
      </Content>
    </Container>
  );
}
