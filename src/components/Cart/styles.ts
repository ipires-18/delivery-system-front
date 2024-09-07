import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-height: 80vh;
  overflow-y: auto;
`;

export const EmptyCartMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 18px;
  color: #555;
`;

export const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ItemImage = styled.img`
  max-width: 100px;
  height: auto;
  border-radius: 4px;
  margin-right: 15px;
`;

export const ItemHeader = styled.h2`
  margin: 0;
  font-size: 20px;
  color: #333;
`;

export const ItemDescription = styled.p`
  color: #777;
  margin: 5px 0;
`;

export const ItemPrice = styled.p`
  font-weight: bold;
  color: #000;
  margin: 5px 0;
`;

export const ItemQuantity = styled.p`
  margin: 10px 0;
  color: #333;
`;

export const IngredientsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
`;

export const Ingredient = styled.span`
  background-color: #f8f8f8;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 14px;
  color: #333;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-top: 1px solid #ddd;
  margin-top: 20px;
`;

export const TotalLabel = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

export const TotalAmount = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  width: 100%;
  gap: 10px;
`;

export const Button = styled.button<{ primary?: boolean }>`
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;

  background-color: ${(props) => (props.primary ? "#007bff" : "#cccccc")};
  color: ${(props) => (props.primary ? "#ffffff" : "#000000")};;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.primary ? "#45a049" : "#e53935")};
    color: #ffffff;
  }
`;

export const Wrapper = styled.div`
 width: 500px;
`;
