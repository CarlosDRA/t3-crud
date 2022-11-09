import { createContext, useContext, useState } from "react";

const shop = {}

const cartContext = createContext(shop);

export function CartProvider({ children } : {children:any}) {
    const [cart, setCart] = useState(shop);

    return (
        <cartContext.Provider value={[cart, setCart]}>
            {children}
        </cartContext.Provider>
    );
};

export function useCartContext() {
    return useContext(cartContext);
};
