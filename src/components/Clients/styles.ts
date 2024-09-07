import styled from 'styled-components';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  primary?: boolean;
}

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 1216px;
  margin: 0 auto;
  padding: 16px;
  box-sizing: border-box;
  max-height: fit-content;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  width: 100%;
  max-width: 1216px;
  margin: 40px auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
`;

export const Toogle = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  width: fit-content;
  height: 50px;
  padding: 20px;
  border-radius: 4px;

  background-color: ${(props) => (props.primary ? "#4CAF50" : "#FFFFFF")};
  border: ${(props) => (props.primary ? "none" : "2px solid black")};
  color: ${(props) => (props.primary ? "#FFFFFF" : "#000000")};

  &:hover {
    background-color: #d3d3d3;
    border-color: #808080;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 16px;
  }
`;

