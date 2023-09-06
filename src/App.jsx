import { ItemCount } from "./components/common/itemCount/ItemCount";
import { Footer } from "./components/layout/footer/footer";
import { Navbar } from "./components/layout/navbar/Navbar";
import ItemDetailContainer from "./components/pages/ItemDetailContainer/ItemDetailContainer";
import FetchingDeDatosContainer from "./components/pages/fetchingDeDatos/fetchingDeDatosContainer";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";

const App = () => {
  
  return (
    <div>
      <Navbar />
      {/* <ItemListContainer />
      <FetchingDeDatosContainer/>
      <Footer /> */}
      {/* <ItemDetailContainer/> */}
    <ItemCount/>
    </div>
  );
};

export default App;
