import styled from 'styled-components';

export const Board = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  flex: 1;

  padding: 16px;
  border-radius: 16px;
  border: 1px solid rgba(204, 204, 204, 0.4);

  > header {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;

  button {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
    justify-content: center;

    width: 100%;
    border: 1px solid rgba(204, 204, 204, 0.4);
    background-color: #FFF;
    border-radius: 8px;
    height: 128px;

    strong {
      font-weight: 500;
    }

    span {
      color: #666;
      font-size: 14px ;
    }
  }
`;


export const Loader = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #000;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
