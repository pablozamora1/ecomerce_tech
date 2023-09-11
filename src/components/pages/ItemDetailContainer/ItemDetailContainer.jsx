import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  const {id} = useParams()
  
  

  useEffect(() => {
    let producFind = products.find((product) => product.id === +id);
    const getProduct = new Promise((res,) => {
      setTimeout(() => {
        res(producFind);
      }, 500);
        
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
