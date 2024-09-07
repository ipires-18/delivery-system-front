import React, { useState } from 'react';
import { ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from './styles';
import { useCartStore } from '../../store/useCartStore';
import { Input } from '../Input/Input';
import { api } from '../../service/api';
import {toast} from 'react-toastify';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Dialog: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  const [inputValue, setInputValue] = useState('');
  const { cartItems, clearCart } = useCartStore();

  console.log({cartItems})

  const getProductQuantities = () => {
    return cartItems.map(({ product, quantity }) => ({
      product: product._id,
      quantity
    }));
  };

 async function handleCreateOrder(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault()

    if(cartItems.length <= 0){
     return toast.warn('Adicione um produto');
    }

    const data = {
      table: inputValue,
      products:getProductQuantities()
    }

    const response = await  api.post('orders', data)

    if(response.status === 201){
      toast.success('Pedido realizado com sucesso');
      clearCart()
      onClose()
    }

  }


  return (
    <form onSubmit={handleCreateOrder}>
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>
            <h2>{title}</h2>
          </ModalHeader>
          <ModalBody>
            <Input
              label="Qual sua mesa?"
              placeholder="Digite o número da mesa..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            {children}
          </ModalBody>
          <ModalFooter>
            <Button type="submit" primary>Finalizar</Button>
            <Button onClick={onClose}>Fechar</Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </form>
  );
};
