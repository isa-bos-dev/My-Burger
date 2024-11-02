import { useState } from 'react';
import type {MenuItem, OrderItem} from '../types';

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0.0);
    const [orderNumber, setOrderNumber] = useState(1);

    
   const addItem = (item: MenuItem) => {
    // validar si existe el item en el order
    const itemExist = order.find(orderItem => orderItem.id === item.id);
    if (itemExist) { // Si existe
        const updatedOrder =order.map(orderItem => orderItem.id === item.id 
            ? {...orderItem, quantity: orderItem.quantity + 1} 
            : orderItem)
        // Actualizamos la orden
        setOrder(updatedOrder);
    }else{ // Si no existe
        const newItem = {...item, quantity: 1};
        setOrder([...order, newItem]);
    }
   };

   const removeItem = (id: MenuItem['id']) => {
    setOrder(order.filter(item => item.id !== id));
   }

   const placeOrder = () => {
    setOrder([]);
    setTip(0);
    setOrderNumber(prevOrderNumber => prevOrderNumber + 1); // Incrementa el número de orden
  };
    
    return { order, tip, setTip, addItem, removeItem, placeOrder, orderNumber};
}