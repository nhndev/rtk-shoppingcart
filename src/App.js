import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./page/Home"
import Cart from "./page/Cart"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
