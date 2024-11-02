type MenuContentProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
};

const MenuContent: React.FC<MenuContentProps> = ({
  title,
  children,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border rounded-lg mb-2">
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 flex justify-between items-center hover:bg-orange-50 transition-colors"
      >
        <h3 className="text-base md:text-lg font-semibold text-gray-700">
          {title}
        </h3>
        {/* Emoji para indicar si esta abierto o cerrado */}
        <span
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          🔻
        </span>
      </button>
      <div
        className={`transition-all duration-200 overflow-hidden ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4">{children}</div>
      </div>
    </div>
  );
};

export default MenuContent;
