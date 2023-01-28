import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Navigation from "./components/navigation/Navigation";
import Home from "./routes/home/Home";
import Shop from "./routes/shop/Shop";
import Authentication from "./routes/authentication/Authentication";
import Checkout from "./routes/checkout/CheckOut";

import { setCurrentUser } from "./store/user/user.action";
import {
  onAuthStateChangedListener,
  createUserDoc,
} from "./utils/firebase/Firebase";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDoc(user);
      }

      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

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
