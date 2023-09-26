import { useContext } from "react";
import { CartContext } from "../../../context/CartContex";
import { Button } from "@mui/material";

const CartContainer = () => {
  const { cart, clearCart, deleteById } = useContext(CartContext);
  console.log(cart);

  return (
    <div>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <h2>{product.price}</h2>
            <h2>{product.quantity}</h2>
            <Button
              sx={{ height: 20 }}
              size="small"
              variant="contained"
              onClick={() => deleteById(product.id)}
            >
              Eliminar
            </Button>
          </div>
        );
      })}
      <Button
        sx={{ height: 20 }}
        size="small"
        variant="contained"
        onClick={clearCart}
      >
        limpiar carrito
      </Button>
    </div>
  );
};

export default CartContainer;
