import { createContext } from 'react';

const ShopContext = createContext();

const ShopContextProvider = ({ props }) => {
    const currency = '$';
    const delivery_fee=10;
    const value = {
       products
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;