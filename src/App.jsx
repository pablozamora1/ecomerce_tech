import { Footer } from "./components/layout/footer/footer";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";

const App = () => {
  let productos = "aca estan los productos";
  return (
    <div>
      <Navbar />
      <ItemListContainer productos={productos} />
      <Footer />
    </div>
  );
};

export default App;
