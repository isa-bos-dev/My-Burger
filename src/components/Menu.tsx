import React, { useState } from "react";
import MenuContent from "./MenuContent";
import MenuItems from "./MenuItems";
import type { MenuItem as MenuItemType } from "../types";

type MenuProps = {
  menuItems: MenuItemType[];
  addItem: (item: MenuItemType) => void;
};

const Menu: React.FC<MenuProps> = ({ menuItems, addItem }) => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const categoryOrder = ["Entrantes", "Principales", "Postres", "Bebidas"];

  // Agrupar los elementos del menú por categoría
  const groupedMenuItems = menuItems.reduce(
    (acc: Record<string, MenuItemType[]>, item) => {
      acc[item.category] = acc[item.category] || [];
      acc[item.category].push(item);
      return acc;
    },
    {}
  );

  return (
    <div className="shadow-lg p-5">
      <div className="border-b bg-orange-50">
        <h2 className="flex items-center justify-center space-x-2 text-orange-800 p-5 font-black text-xl md:text-2xl">
          🍴 Menú
        </h2>
      </div>
      <div className="p-6 space-y-4">
        {categoryOrder.map((category) =>
          groupedMenuItems[category] ? (
            <MenuContent
              key={category}
              title={category}
              isOpen={openCategory === category}
              onToggle={() =>
                setOpenCategory(openCategory === category ? null : category)
              }
            >
              <div className="space-y-2">
                {groupedMenuItems[category].map((item) => (
                  <MenuItems key={item.id} item={item} addItem={addItem} />
                ))}
              </div>
            </MenuContent>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Menu;
