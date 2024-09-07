import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 200px;
  background-color: #333333;
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1216px;

  .details {
    h1 {
      font-size: 32px;
      color: #FFF;
    }

    h2 {
      font-size: 16px;
      color: #FFF;
      font-weight: 400;
      opacity: 0.9;
      margin-top: 6px;
    }
  }
`;
