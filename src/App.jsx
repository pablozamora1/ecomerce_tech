import Layout from "./components/layout/Layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { menuRoutes } from "./routes/menuRoutes";
import CartContexProvider from "./context/CartContex";
const App = () => {
  return (
    <BrowserRouter>
      <CartContexProvider>
        <Routes>
          <Route element={<Layout />}>
            {menuRoutes.map(({ id, path, Element }) => (
              <Route key={id} path={path} element={<Element />} />
            ))}
          </Route>
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </CartContexProvider>
    </BrowserRouter>
  );
};

export default App;
