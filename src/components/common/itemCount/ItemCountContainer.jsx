
import { useState } from "react";
import ItemCount from "./ItemCount"
const ItemCountContainer = () => {

    const [contador, setContador] = useState(1);
  return (
    <div><ItemCount contador={contador} setContador={setContador} /></div>
  )
}

export default ItemCountContainer