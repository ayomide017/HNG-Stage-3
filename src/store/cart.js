import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useCartStore = create(persist(
    (set) => ({
        cartItems: [],
        updateCart: (cartItem) => set((state) => ({...state, cartItems:  [...state.cartItems, cartItem]})),
        removeCartItem: (id) => set((state) => {
            const filteredCartItem = state.cartItems.filter((cartItem) => cartItem.id !== id)

            return ({...state, cartItems: filteredCartItem})
        }),
        updateCartItem: (id, data) => set((state) => {
            const updatedItems = state.cartItems.map((cartItem) => cartItem.id === id ? {...cartItem, ...data} : cartItem)

            return ({...state, cartItems: updatedItems})
        }) ,
        clearCart: () => set((state) => ({...state, cartItems: []}))
    }), {
        name: "cartItems"
    }
))