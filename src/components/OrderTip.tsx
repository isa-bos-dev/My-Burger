import type { Dispatch, SetStateAction } from "react";
import { tipOptions } from "../data/db";
import type { TipOption } from "../types";

type OrderTipProps = {
  setTip: Dispatch<SetStateAction<number>>;
  tip: number;
};

export default function OrderTipForm({ setTip, tip }: OrderTipProps) {
  return (
    <div className="mt-8 space-y-4">
      <div className="bg-orange-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-3 text-gray-700">
          Selecciona la propina:
        </h3>
        <form className="flex items-center justify-center">
          {tipOptions.map((tipOption: TipOption) => (
            <div
              key={tipOption.id}
              className="flex items-center space-x-2 mx-4"
            >
              <label
                className="flex items-center space-x-2 cursor-pointer"
                htmlFor={tipOption.id}
              >
                {tipOption.label}
              </label>
              <input
                id={tipOption.id}
                type="radio"
                name="tip"
                value={tipOption.value}
                onChange={(e) => setTip(+e.target.value)}
                checked={tipOption.value === tip}
                className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              />
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}
