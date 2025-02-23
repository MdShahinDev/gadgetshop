import { createContext } from "react";
import {products} from "../assets/products";
export const ShopContext = createContext();
const ShopContextProvider = (props)=>{
    const delivery_fee = 10;
    const delivery_fee_country = 10;
    const value = {
        products,delivery_fee,delivery_fee_country
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;