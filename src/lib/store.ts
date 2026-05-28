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
  tags: string[];
  ingredients?: string[];
};

export type OrderStatus = 'pending' | 'delivered' | 'paid';

export type Order = {
  id: string;
  customerName: string;
  items: { productId: string; quantity: number; priceAtSale: number }[];
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
  deliveredAt?: string;
  paidAt?: string;
};

export type Category = {
  id: string;
  name: string;
};

const INITIAL_CATEGORIES: Category[] = [
  { id: '1', name: 'Pastelería' },
  { id: '2', name: 'Bebidas' },
  { id: '3', name: 'Snacks' },
];

const INITIAL_PRODUCTS: Product[] = [
  { 
    id: '1', 
    name: 'Torta de Selva Negra', 
    description: 'Deliciosa torta con chocolate, cerezas y crema.', 
    price: 45000, 
    stock: 5, 
    minStock: 2, 
    category: '1',
    tags: ['repostería', 'chocolate'],
    ingredients: ['Cacao', 'Cerezas', 'Crema de Leche']
  },
  { 
    id: '2', 
    name: 'Café Americano', 
    description: 'Café de grano tostado premium.', 
    price: 3500, 
    stock: 50, 
    minStock: 10, 
    category: '2',
    tags: ['bebida', 'caliente']
  },
];

export function useComandaStore() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedProducts = localStorage.getItem('cf_products');
    const savedCategories = localStorage.getItem('cf_categories');
    const savedOrders = localStorage.getItem('cf_orders');

    setProducts(savedProducts ? JSON.parse(savedProducts) : INITIAL_PRODUCTS);
    setCategories(savedCategories ? JSON.parse(savedCategories) : INITIAL_CATEGORIES);
    setOrders(savedOrders ? JSON.parse(savedOrders) : []);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('cf_products', JSON.stringify(products));
      localStorage.setItem('cf_categories', JSON.stringify(categories));
      localStorage.setItem('cf_orders', JSON.stringify(orders));
    }
  }, [products, categories, orders, isLoaded]);

  const addProduct = (p: Product) => setProducts([...products, p]);
  const updateProduct = (p: Product) => setProducts(products.map(old => old.id === p.id ? p : old));
  const deleteProduct = (id: string) => setProducts(products.filter(p => p.id !== id));

  const addOrder = (o: Order) => {
    setOrders([...orders, o]);
    // Automatically update stock
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
        const now = new Date().toISOString();
        return {
          ...o,
          status,
          deliveredAt: status === 'delivered' ? now : o.deliveredAt,
          paidAt: status === 'paid' ? now : o.paidAt,
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