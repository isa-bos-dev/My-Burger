import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

export default function OrderTotals({
  order,
  tip,
  placeOrder,
}: OrderTotalsProps) {
  // Calculamos el subtotalAmount usando useMemo
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

  // Calculamos tipAmount incluyendo subtotalAmount en el array de dependencias
  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, subtotalAmount]);

  // Calculamos totalAmount
  const totalAmount = useMemo(
    () => subtotalAmount + tipAmount,
    [subtotalAmount, tipAmount]
  );

  const tipPercentage = tip * 100;

  return (
    <>
      <div className="border-t pt-4 space-y-3">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal:</span>
          <span>{formatCurrency(subtotalAmount)}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Propina ({tipPercentage}%):</span>
          <span>{formatCurrency(tipAmount)}</span>
        </div>
        <div className="pb-10 flex justify-between font-bold text-xl text-orange-600 pt-2 border-t">
          <span>Total a pagar:</span>
          <span>{formatCurrency(totalAmount)}</span>
        </div>
      </div>
      <button
        className="font-bold w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-6 mt-4 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] rounded-2xl"
        onClick={placeOrder}
      >
        ⏳ Generar Orden
      </button>
    </>
  );
}
