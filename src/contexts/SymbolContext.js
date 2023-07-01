import React from "react";


export const SymbolContextDefaults = {
    value:"Ft",
    setValue: () => { }
}

export const SymbolContext = React.createContext(SymbolContextDefaults)