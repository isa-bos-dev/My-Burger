import { formatCurrency } from "../helpers";
import { MenuItem, OrderItem } from "../types";

type OrderItemsProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem["id"]) => void;
};

export default function OrderItems({ order, removeItem }: OrderItemsProps) {
  return (
    <div>
      <div className="space-y-3 mt-5">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row justify-between items-center p-3 bg-gray-50 rounded-lg group"
          >
            <p className="font-medium text-center md:text-left">{item.name}</p>
            <div className="flex items-center space-x-4 mt-2 md:mt-0">
              <div className="text-right">
                <div className="text-gray-600">
                  {formatCurrency(item.price)} x {item.quantity}
                </div>
                <div className="font-bold text-orange-600">
                  {formatCurrency(item.price * item.quantity)}
                </div>
              </div>

              <button
                className="opacity-0 group-hover:opacity-100"
                onClick={() => removeItem(item.id)}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
