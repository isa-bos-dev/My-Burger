import { formatCurrency } from "../helpers";
import type { MenuItem } from "../types";

type MenuItemsProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

export default function MenuItems({ item, addItem }: MenuItemsProps) {
  return (
    <button
      className="w-full justify-between hover:bg-orange-50 focus:bg-orange-50 hover:border-orange-200 focus:border-orange-200 transition-colors outline-none p-2"
      onClick={() => addItem(item)}
    >
      <p className="font-medium">{item.name}</p>
      <p className="text-orange-600 font-bold">{formatCurrency(item.price)}</p>
    </button>
  );
}
