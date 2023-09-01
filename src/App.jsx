import { Footer } from "./components/layout/footer/footer";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";

const App = () => {
  
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <Footer />
    </div>
  );
};

export default App;
