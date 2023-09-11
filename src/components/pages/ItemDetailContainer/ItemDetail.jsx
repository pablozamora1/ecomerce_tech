import CardDetail from "../../common/cardDetail/CardDetail";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({ productSelected }) => {

  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    console.log(data)
  };

  return (
    <div>
      <div className={styles.card}>
        <CardDetail productSelected={productSelected} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
