'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';


const initialCartState = {
    UserLikedProductss: [],
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'like':
            const isLiked = 
            }
            return { ...state, items: [...state.items, action.item] };
        default:
            return state;
    }
};

const HeartContext = createContext<{
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
        const storedCart = sessionStorage.getItem('cart');
        if (storedCart) {
            dispatch({ type: 'SET_CART', items: JSON.parse(storedCart) });
        }
    }, []);

    // Save cart items to local storage whenever they change (Client-side only)
    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(state.items));
    }, [state.items]);

    return (
        <HeartContext.Provider value= {{ state, dispatch }
}>
    { children }
    < /HeartContext.Provider>
    );
};

export const useHeart = () => useContext(HeartContext);
