import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Louder from "../../common/louder/Louder";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import AgregarDocs from "../../../AgregarDocs";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let itemCollection = collection(db, "products");
    let consulta;

    if (!categoryName) {
      consulta = itemCollection;
    } else {
      consulta = query(itemCollection, where("category", "==", categoryName));
    }

    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((elemento) => {
          return {
            ...elemento.data(),
            id: elemento.id,
          };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  if (items.length === 0) {
    return (
      <div>
        <Louder />
      </div>
    );
  }

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};
