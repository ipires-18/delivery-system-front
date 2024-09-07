import { create } from 'zustand';
import { Products } from '../../types/Products';

interface CartItemProps {
  product: Products;
  quantity: number;
}

interface CartStateProps {
  cartItems: CartItemProps[];
  addToCart: (product: Products) => void;
  removeFromCart: (productId: Products) => void;
  getQuantity: (productId: string) => number;
  clearCart: () => void;

}

export const useCartStore = create<CartStateProps>((set, get) => ({
  cartItems: [],
  addToCart: (product: Products) =>
    set((state) => {
      const index = state.cartItems.findIndex((cartItem) => cartItem.product._id === product._id);

      if (index < 0) {
        return { cartItems: [...state.cartItems, { product, quantity: 1 }] };
      }

      return {
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.product._id === product._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
      };
    }),
  removeFromCart: (product: Products) =>
      set((state) => {
        const item = state.cartItems.find((cartItem) => cartItem.product._id === product._id);

        if (!item) return state;

        if (item.quantity === 1) {
          return { cartItems: state.cartItems.filter((cartItem) => cartItem.product._id !== product._id) };
        }

        return {
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.product._id === product._id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          ),
        };
    }),
    getQuantity: (productId: string) => {
      const state = get();
      const cartItem = state.cartItems.find((item) => item.product._id === productId);
      return cartItem ? cartItem.quantity : 0;
    },
    clearCart: () => {
      set({ cartItems: [] });
    },
}));
