import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 500px;
  max-width: 100%;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  position: relative;
  width: fit-content;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 10px;

  h2 {
    margin: 0;
  }

  button {
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px 0;
  max-height: 500px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #eaeaea;
  padding-top: 10px;
  gap: 10px;
`;

export const Button = styled.button<{ primary?: boolean }>`
  background-color: ${props => props.primary ? '#4CAF50' : '#f44336'};
  color: #FFFFFF;
  border: ${props => props.primary ? 'none' : '1px solid #ced4da'};
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #ced4da;
  }
`;
