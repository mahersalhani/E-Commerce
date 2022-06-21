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
import AdminAddBrandPage from "./pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./pages/Admin/AdminAddCategoryPage";
import AdminAddsubCategoryPage from "./pages/Admin/AdminAddsubCategoryPage";
import AdminAddProductPage from "./pages/Admin/AdminAddProductPage";
import UserAllOrdersPage from "./pages/User/UserAllOrdersPage";
import UserFavoriteProductsPage from "./pages/User/UserFavoriteProductsPage";
import UserAllAddresPage from "./pages/User/UserAllAddresPage";
import UserAddAddressPage from "./pages/User/UserAddAddressPage";
import UserEditAddressPage from "./pages/User/UserEditAddressPage";
import UserProfilePage from "./pages/User/UserProfilePage";
import ErrorPage from "./pages/Error/ErrorPage";

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
        <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
        <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
        <Route path="/admin/addsubcategory" element={<AdminAddsubCategoryPage />} />
        <Route path="/admin/addproduct" element={<AdminAddProductPage />} />
        <Route path="/user/allorders" element={<UserAllOrdersPage />} />
        <Route path="/user/favoriteproducts" element={<UserFavoriteProductsPage />} />
        <Route path="/user/addresses" element={<UserAllAddresPage />} />
        <Route path="/user/add-address" element={<UserAddAddressPage />} />
        <Route path="/user/edit-address" element={<UserEditAddressPage />} />
        <Route path="/user/profile" element={<UserProfilePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
