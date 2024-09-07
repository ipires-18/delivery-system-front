import React from 'react';
import { formatCurrency } from "../../utils/formatCurrency";
import { useCartStore } from "../../store/useCartStore";
import {
  CartContainer,
  EmptyCartMessage,
  CartItem,
  ItemImage,
  ItemHeader,
  ItemDescription,
  ItemPrice,
  ItemQuantity,
  IngredientsList,
  Ingredient,
  TotalContainer,
  TotalLabel,
  TotalAmount,
  ButtonContainer,
  Button,
  Wrapper
} from './styles';
import { Ingredients } from '../../types/Ingredients';

export const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useCartStore();

  const calculateTotal = () => {
    return cartItems.reduce((total, { product, quantity }) => total + product.price * quantity, 0);
  };

  return (
    <CartContainer>
      {cartItems.length === 0 ? (
        <EmptyCartMessage>
          Seu carrinho está vazio
        </EmptyCartMessage>
      ) : (
        <>
          {cartItems.map(({ product, quantity }) => (
            <CartItem key={product._id}>
              <ItemImage
                src={`${import.meta.env.VITE_API}uploads/${product.imagePath}`}
                alt={product.name}
              />
              <Wrapper >
                <ItemHeader>{product.name}</ItemHeader>
                <ItemDescription>Descrição: {product.description}</ItemDescription>
                <ItemPrice>Preço: {formatCurrency(product.price)}</ItemPrice>
                <ItemQuantity>Quantidade: {quantity}</ItemQuantity>
                <IngredientsList>
                  Ingredientes: {product.ingredients.map((ingredient:Ingredients) => (
                    <Ingredient key={ingredient._id}>
                      {ingredient.icon} {ingredient.name}
                    </Ingredient>
                  ))}
                </IngredientsList>
                <ButtonContainer>
                  <Button onClick={() => removeFromCart(product)}>Remover</Button>
                  <Button onClick={() => addToCart(product)} primary>Adicionar</Button>
                </ButtonContainer>
              </Wrapper>
            </CartItem>
          ))}
          <TotalContainer>
            <TotalLabel>Total:</TotalLabel>
            <TotalAmount>{formatCurrency(calculateTotal())}</TotalAmount>
          </TotalContainer>
        </>
      )}
    </CartContainer>
  );
};
