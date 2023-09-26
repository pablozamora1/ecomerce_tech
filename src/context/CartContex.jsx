import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContexProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const AddCart = (newProduct) => {
    let exist = isInCart(newProduct.id);
    if (exist) {
      let newArray = cart.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: newProduct.quantity,
          };
        } else {
          return product;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, newProduct]);
    }
  };

  const isInCart = (id) => {
    let exist = cart.some((prod) => prod.id === id);
    return exist;
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteById = (id) => {
    let newArray = cart.filter((product) => product.id !== id);
    setCart(newArray);
  };

  const getTotalQuantityById = (id) => {
    let producto = cart.find(prod =>prod.id === +id)
    return producto?.quantity
  };

  let data = {
    cart,
    AddCart,
    clearCart,
    deleteById,
    getTotalQuantityById,
  };

  return <CartContext.Provider value={data}> {children} </CartContext.Provider>;
};

export default CartContexProvider;
