import styled from 'styled-components';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  primary?:boolean
}

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: fit-content;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardHeader = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction:column;
  font-size: 1rem;
  margin-bottom: 20px;
  gap: 10px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button<ButtonProps>`
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${(props) => (props.primary ? "#007bff" : "#cccccc")};
  color: ${(props) => (props.primary ? "#ffffff" : "#000000")};;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.primary ? "#45a049" : "#e53935")};
    color: #ffffff;
  }
`;
