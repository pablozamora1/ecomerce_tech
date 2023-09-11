import { useEffect, useState } from "react";

import ItemList from "./ItemList";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  console.log(categoryName)

  useEffect(() => {
const filteredProducts = products.filter(
  (products) => products.category === categoryName
);

    const tarea = new Promise((res) => {
      setTimeout(() => {
        res(categoryName ? filteredProducts : products);
      }, 500);

      // rejet(" la promesa salio mal");
    });

    tarea
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log("catch: ", err);
      });
  }, [categoryName]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};
