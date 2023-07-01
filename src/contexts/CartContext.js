import React from "react";



export const CartContextDefaults={
    value:[],
    setValue:()=>{}
}

export const CartContext=React.createContext(CartContextDefaults)