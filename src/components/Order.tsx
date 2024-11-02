import React, { Dispatch, SetStateAction } from "react";
import OrderItems from "./OrderItems";
import OrderTip from "./OrderTip";
import OrderTotals from "./OrderTotals";
import { OrderItem } from "../types";

type OrderProps = {
  order: OrderItem[];
  removeItem: (id: number) => void;
  tip: number;
  setTip: Dispatch<SetStateAction<number>>;
  placeOrder: () => void;
  orderNumber: number;
};

const Order: React.FC<OrderProps> = ({
  order,
  removeItem,
  tip,
  setTip,
  placeOrder,
  orderNumber,
}) => {
  return (
    <div className="shadow-lg p-5">
      <div className="border-b bg-orange-50">
        <h2 className="flex items-center justify-center space-x-2 text-orange-800 p-5 font-black text-xl md:text-2xl">
          🛒 Orden #{orderNumber}
        </h2>
      </div>
      <div className="p-6 space-y-4">
        {order.length > 0 ? (
          <>
            <OrderItems order={order} removeItem={removeItem} />
            <OrderTip setTip={setTip} tip={tip} />
            <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
          </>
        ) : (
          <p className="text-center text-gray-500 py-8">
            Tu orden está vacía. ¡Selecciona algunos platos!
          </p>
        )}
      </div>
    </div>
  );
};

export default Order;
