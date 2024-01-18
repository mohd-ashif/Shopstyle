
import React , {createContext} from 'react'
import all_product from  "../data/data"

export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {
    const ContextValue ={all_product};

    return (
        <ShopContext.Provider value={ContextValue} >
            {props.children}

        </ShopContext.Provider>

    )

}
export default ShopContextProvider