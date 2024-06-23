'use client'

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CartProvider } from '../app/_components/ContextApi/CartContext';

const queryClient = new QueryClient();

export default function AllProviders({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <CartProvider>
                {children}
            </CartProvider>
        </QueryClientProvider>
    );
}
