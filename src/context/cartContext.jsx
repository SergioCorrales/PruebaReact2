import { createContext, useContext, useState } from "react"



//Crear Context
const CartContext = createContext();


export const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);

  //1) Valores que luego se van a pasar al context
  const addProduct = (product) => {  

    setCart( [...cart, product] )

  };
  const deleteProduct = () => {};
  const updateProduct = () => {};
  const deleteAllProducts = () => {};



  return (
    <CartContext.Provider 
      value = {{
        cart, 
        addProduct,
        deleteProduct,
        updateProduct,
        deleteAllProducts}}
      >{children}</CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
