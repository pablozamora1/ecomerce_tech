import { CartWidget } from "../../common/cartWidget/CartWidget";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div
        style={{
          width: "100px",
          alignItems: "center",
        }}
      >
        <h4>Compumundo Hipermegared</h4>
        <img
          src="https://res.cloudinary.com/dbgdadeox/image/upload/v1686532935/imagenes%20ecomerce%20react/homeroSimpsons_m49gox.jpg"
          style={{
            width: "100px",
          }}
        />
      </div>

      <ul>
        <li>
          <a href="">Todos</a>
        </li>
        <li>
          <a href="">PCs De Escritorio</a>
        </li>
        <li>
          <a href="">Noteboks</a>
        </li>
        <li>
          <a href="">Placas de Videos</a>
        </li>
        <li>
          <a href="">Monitores</a>
        </li>
      </ul>
      <div>
        <CartWidget />
      </div>
    </div>
  );
};
