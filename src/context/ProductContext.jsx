import { createContext, useReducer } from "react";


const initialState = {
    products: [
        {
            id: 1,
            title: 'Apple 2',
        },
        {
            id: 2,
            title: 'Gilos ',
        },
    ]
}

const productReducer = (state, action) => {
    switch(action.type) {
        case 'QUSHISH':
            const update = [...state.products, action.payload]
            return {
                ...state,
                products: update
            }
        case "UCHIRISH":
            const filterProducts = state.products.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                products: filterProducts
            }

        default:
            return state
    }
}


export const ProductContext = createContext()

export const ProductProvider = ({children}) => {


    const [state, dispatch] = useReducer(productReducer, initialState)


    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductContext.Provider>
    )
}