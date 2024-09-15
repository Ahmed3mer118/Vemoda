import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./Component/Navbar";
import Account from "./User/Account";
import HomePage from "./Component/HomePage";
import BestSeller from "./Component/BestSeller";
import Products from "./Context/Products";
import Cart from "./Context/Cart";
import ProductDetails from "./Context/ProductDetails";
import ChechOut from "./Context/ChechOut";
import { Helmet } from "react-helmet";
import Confirm from "./Context/Confirm";
import DashboardLayout from "./User/DashboardLayout";
import DashboardHome from "./User/DashboardHome";
import EditProfile from "./User/EditProfile";
import SignUp from "./User/SignUp";
import ProductCategories from "./Context/ProductCategies";
import Favorite from "./Component/Favorite";
import CreateAccout from "./User/CreateAccout";
import AboutShow from "./Component/AboutShow";

function App() {
  // const location = useLocation()
  // let user = location.state.name;
  let user = JSON.parse(localStorage.getItem("dataUser"));

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutShow />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/products/details/:id" element={<ProductDetails />} />
        <Route path="/products/:category" element={<ProductCategories />} />
        <Route path="/checkout" element={<ChechOut />} />
        <Route path="/checkout/confirm" element={<Confirm />} />
        <Route path="/dashboardUser" element={<DashboardLayout />}>
          <Route index element={ <DashboardHome />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="profile" element={ <Account /> } />
          <Route path="profile/edit" element={<EditProfile />} />
          <Route path="create_account" element={<CreateAccout />} />
        </Route>
        {/* <Route path="/dashboardUser/signUp" element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
