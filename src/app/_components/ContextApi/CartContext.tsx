'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { z } from 'zod';

const CartItemSchema = z.object({
    id: z.string(),
    proName: z.string(),
    proDesc: z.string(),
    proPrice: z.number(),
    proQuantity: z.number(),
    proImage: z.array(z.string()),
    proColors: z.array(z.string()),
    proSizes: z.array(z.string())
});

type CartItem = z.infer<typeof CartItemSchema>;

type CartState = {
    items: CartItem[];
};

type CartAction =
    | { type: 'ADD_ITEM'; item: CartItem }
    | { type: 'REMOVE_ITEM'; id: string }
    | { type: 'UPDATE_ITEM'; id: string; quantity: number }
    | { type: 'CLEAR_CART' }
    | { type: 'SET_CART'; items: CartItem[] };

const initialCartState: CartState = {
    items: [],
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_ITEM':
            const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
            if (existingItemIndex > -1) {
                const updatedItems = state.items.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, proQuantity: item.proQuantity + action.item.proQuantity }
                        : item
                );
                return { ...state, items: updatedItems };
            }
            return { ...state, items: [...state.items, action.item] };
        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.id)
            };
        case 'UPDATE_ITEM':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.id ? { ...item, proQuantity: action.quantity } : item
                ),
            };
        case 'CLEAR_CART':
            return { ...state, items: [] };
        case 'SET_CART':
            return { ...state, items: action.items };
        default:
            return state;
    }
};

const CartContext = createContext<{
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
}>({
    state: initialCartState,
    dispatch: () => null,
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, initialCartState);

    // Load cart items from local storage on initial render (Client-side only)
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            dispatch({ type: 'SET_CART', items: JSON.parse(storedCart) });
        }
    }, []);

    // Save cart items to local storage whenever they change (Client-side only)
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.items));
    }, [state.items]);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
