import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Utils/Footer";
import NavBarLogIn from "./components/Utils/NavBarLogIn";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import AllCategoryPage from "./pages/Category/AllCategoryPage";
import AllBrandPage from "./pages/Brand/AllBrandPage";
import ShopProductsPage from "./pages/Products/ShopProductsPage";
import ProductDetalisPage from "./pages/Products/ProductDetailsPage";
import CartPage from "./pages/cart/CartPage";
import ChoosePayMethoudPage from "./pages/Chackout/ChoosePayMethoudPage";
import AdminAllProductsPage from "./pages/Admin/AdminAllProductsPage";
import AdminAllOrderPage from "./pages/Admin/AdminAllOrderPage";
import AdminOrderDetalisPage from "./pages/Admin/AdminOrderDetalisPage";

function App() {
  return (
    <Fragment>
      <NavBarLogIn />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/allcategory" element={<AllCategoryPage />} />
        <Route path="/allbrand" element={<AllBrandPage />} />
        <Route path="/products" element={<ShopProductsPage />} />
        <Route path="/products/:id" element={<ProductDetalisPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order/paymethoud" element={<ChoosePayMethoudPage />} />
        <Route path="/admin/allproducts" element={<AdminAllProductsPage />} />
        <Route path="/admin/allorders" element={<AdminAllOrderPage />} />
        <Route path="/admin/orders/:id" element={<AdminOrderDetalisPage />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
