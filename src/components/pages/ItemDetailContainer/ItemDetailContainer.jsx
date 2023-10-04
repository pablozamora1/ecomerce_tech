import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContex";
import { db } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";
import Louder from "../../common/louder/Louder";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { AddCart, getTotalQuantityById } = useContext(CartContext);

  const { id } = useParams();

  const cantidad = getTotalQuantityById(id);

  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    AddCart(data);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Listo! Agregaste el producto al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    let itemCollection = collection(db, "products");
    let refDoc = doc(itemCollection, id);
    getDoc(refDoc).then((res) => {
      setProductSelected({ ...res.data(), id: res.id });
    });
  }, [id]);

  if (productSelected.price === undefined) {
    return (
      <div>
        <Louder />
      </div>
    );
  }

 

  return (
    <div>
      <ItemDetail
        productSelected={productSelected}
        cantidad={cantidad}
        AddCart={AddCart}
        onAdd={onAdd}
      />
    </div>
  );
};

export default ItemDetailContainer;
