import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  let id = 2;

  useEffect(() => {
    let producFind = products.find((product) => product.id === id);
    const getProduct = new Promise((res,) => {
      setTimeout(() => {
        res(producFind);
      }, 2000);
        
    });

    getProduct
    
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(productSelected);
  return (
    <div>
      <ItemDetail productSelected ={productSelected} />
    </div>
  );
};

export default ItemDetailContainer;
