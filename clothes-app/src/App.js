import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./routes/home/Home";
import Shop from "./routes/shop/Shop";
import Authentication from "./routes/authentication/Authentication";
import Checkout from "./routes/checkout/CheckOut";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
