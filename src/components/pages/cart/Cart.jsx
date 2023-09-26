
import styles from "./CartContainer.module.css";

import CartCard from "../../common/cartCard/CartCard";

const Cart = ({ cart }) => {
  return (
    <div className={styles.cards}>
      {cart.map((product) => {
        return <CartCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Cart;

