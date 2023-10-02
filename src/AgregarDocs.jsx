import { Button } from "@mui/material";
import { products } from "./productsMock";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseConfig";

const AgregarDocs = () => {

    const rellenar = () => {

        let itemCollection = collection(db, "products")
        products.forEach((elemento) => {
          addDoc(itemCollection, elemento )
        })
    }

  return (
    <div>
      <Button onClick={rellenar}>
        rellenar productos
      </Button>
    </div>
  );
};

export default AgregarDocs;
