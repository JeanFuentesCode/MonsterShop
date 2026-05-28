"use client"

import { useState, useEffect } from 'react';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  minStock: number;
  category: string;
};

export type OrderStatus = 'pending' | 'paid' | 'canceled';

export type Order = {
  id: string;
  customerName: string;
  reference: string;
  items: { productId: string; quantity: number; priceAtSale: number }[];
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
  dueDate: string;
  paidAt?: string;
};

export type Category = {
  id: string;
  name: string;
};

const INITIAL_CATEGORIES: Category[] = [
  { id: '1', name: 'General' },
  { id: '2', name: 'Industrial' },
];

export function useComandaStore() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedProducts = localStorage.getItem('ms_products_v2');
    const savedCategories = localStorage.getItem('ms_categories_v2');
    const savedOrders = localStorage.getItem('ms_orders_v2');

    setProducts(savedProducts ? JSON.parse(savedProducts) : []);
    setCategories(savedCategories ? JSON.parse(savedCategories) : INITIAL_CATEGORIES);
    setOrders(savedOrders ? JSON.parse(savedOrders) : []);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('ms_products_v2', JSON.stringify(products));
      localStorage.setItem('ms_categories_v2', JSON.stringify(categories));
      localStorage.setItem('ms_orders_v2', JSON.stringify(orders));
    }
  }, [products, categories, orders, isLoaded]);

  const addProduct = (p: Product) => setProducts([...products, p]);
  const deleteProduct = (id: string) => setProducts(products.filter(p => p.id !== id));
  
  const addOrder = (o: Order) => {
    setOrders([o, ...orders]);
    // Actualizar stock
    o.items.forEach(item => {
      setProducts(prev => prev.map(p => 
        p.id === item.productId ? { ...p, stock: Math.max(0, p.stock - item.quantity) } : p
      ));
    });
  };

  const updateOrderStatus = (orderId: string, status: OrderStatus) => {
    setOrders(prev => prev.map(o => {
      if (o.id === orderId) {
        // Si se cancela, devolvemos el stock
        if (status === 'canceled' && o.status !== 'canceled') {
          o.items.forEach(item => {
            setProducts(curr => curr.map(p => p.id === item.productId ? { ...p, stock: p.stock + item.quantity } : p));
          });
        }
        return {
          ...o,
          status,
          paidAt: status === 'paid' ? new Date().toISOString() : undefined,
        };
      }
      return o;
    }));
  };

  return {
    products,
    categories,
    orders,
    addProduct,
    deleteProduct,
    addOrder,
    updateOrderStatus,
    isLoaded
  };
}