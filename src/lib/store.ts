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

export type OrderStatus = 'pending' | 'paid';

export type Order = {
  id: string;
  customerName: string;
  reference: string;
  items: { productId: string; quantity: number; priceAtSale: number }[];
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
  paidAt?: string;
};

export type Category = {
  id: string;
  name: string;
};

const INITIAL_CATEGORIES: Category[] = [
  { id: '1', name: 'General' },
  { id: '2', name: 'Premium' },
];

const INITIAL_PRODUCTS: Product[] = [
  { 
    id: '1', 
    name: 'Producto Demo A', 
    description: 'Descripción básica', 
    price: 1500, 
    stock: 10, 
    minStock: 3, 
    category: '1'
  }
];

export function useComandaStore() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedProducts = localStorage.getItem('ms_products');
    const savedCategories = localStorage.getItem('ms_categories');
    const savedOrders = localStorage.getItem('ms_orders');

    setProducts(savedProducts ? JSON.parse(savedProducts) : INITIAL_PRODUCTS);
    setCategories(savedCategories ? JSON.parse(savedCategories) : INITIAL_CATEGORIES);
    setOrders(savedOrders ? JSON.parse(savedOrders) : []);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('ms_products', JSON.stringify(products));
      localStorage.setItem('ms_categories', JSON.stringify(categories));
      localStorage.setItem('ms_orders', JSON.stringify(orders));
    }
  }, [products, categories, orders, isLoaded]);

  const addProduct = (p: Product) => setProducts([...products, p]);
  const updateProduct = (p: Product) => setProducts(products.map(old => old.id === p.id ? p : old));
  const deleteProduct = (id: string) => setProducts(products.filter(p => p.id !== id));

  const addOrder = (o: Order) => {
    setOrders([...orders, o]);
    o.items.forEach(item => {
      const product = products.find(p => p.id === item.productId);
      if (product) {
        updateProduct({ ...product, stock: Math.max(0, product.stock - item.quantity) });
      }
    });
  };

  const updateOrderStatus = (orderId: string, status: OrderStatus) => {
    setOrders(orders.map(o => {
      if (o.id === orderId) {
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
    updateProduct,
    deleteProduct,
    addOrder,
    updateOrderStatus,
    isLoaded
  };
}