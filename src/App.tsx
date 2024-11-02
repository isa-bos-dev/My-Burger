import Menu from "./components/Menu";
import Order from "./components/Order";
import { menuItems } from "./data/db";
import useOrder from "./hook/useOrder";

function App() {
  const { order, addItem, removeItem, tip, setTip, placeOrder, orderNumber } =
    useOrder();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 shadow-lg mb-8">
        <div className="container mx-auto flex items-center justify-center space-x-3">
          <h1 className="text-4xl">
            🍔 <span className="font-bold italic">My Burguer</span>
          </h1>
        </div>
        <p className="text-center mt-2 text-orange-100">
          Hamburguesería tradicional con un toque moderno
        </p>
      </header>
      <main className="container mx-auto px-4 pb-8 flex-grow">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Menú */}
          <Menu menuItems={menuItems} addItem={addItem} />

          {/* Orden */}
          <Order
            order={order}
            removeItem={removeItem}
            tip={tip}
            setTip={setTip}
            placeOrder={placeOrder}
            orderNumber={orderNumber}
          />
        </div>
      </main>
      <footer className="bg-orange-600 text-white p-6 mt-8">
        <div className="container mx-auto text-center space-y-3">
          <p className="text-xs text-orange-300 mt-4">
            Diseñado y desarrollado con ❤️ por{" "}
            <span className="font-semibold italic">IsaBosDev</span> - ©{" "}
            {new Date().getFullYear()} 🍔 My Burger. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
