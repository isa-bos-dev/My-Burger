export type MenuItem = {
    id: number;
    name: string;
    price: number;
    category: string;
    };

export type OrderItem = MenuItem & {
    quantity: number;
    };

export type TipOption = {
    id: string;
    value: number;
    label: string;
};