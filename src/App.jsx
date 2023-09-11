import Layout from "./components/layout/Layout";

import ItemDetailContainer from "./components/pages/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./components/pages/cart/CartContainer";
// import FetchingDeDatosContainer from "./components/pages/fetchingDeDatos/fetchingDeDatosContainer";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryName" element={<ItemListContainer />} />
          <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartContainer />} />
        </Route>
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

//  <Navbar />
//     <ItemListContainer />
//     <FetchingDeDatosContainer/>
//     <ItemDetailContainer/>
//     <Footer />
