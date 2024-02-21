import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ModelS from "./components/Vehicles/ModelS/ModelS";
import Inventory from "./components/Vehicles/Inventory/Inventory";
import InvenorderModal from "./components/Vehicles/Inventory/InvenorderModal";
import Compare from "./components/Vehicles/Compare/Compare";
import Charging from "./components/Charging/Charging";
import Shop from "./components/Shop/Shop";
import ShopOrderModal from "./components/Shop/ShopOrderModal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/models" element={<ModelS />}></Route>
          <Route path="/inventory" element={<Inventory />}></Route>
          <Route path="/ordermodal" element={<InvenorderModal />}></Route>
          <Route path="/compare" element={<Compare />}></Route>
          <Route path="/charging" element={<Charging />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/shoporder" element={<ShopOrderModal />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
