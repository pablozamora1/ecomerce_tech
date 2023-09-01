import { useEffect, useState } from "react";
import ItemCountContainer from "../../common/itemCount/ItemCountContainer";
import ItemList from "./ItemList";
import { products } from "../../../productsMock";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((res, rejet) => {
      setTimeout(() => {
        res(products);
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
  }, []);

  return (
    <div>
      <ItemList items={items} />
      <ItemCountContainer />
    </div>
  );
};
