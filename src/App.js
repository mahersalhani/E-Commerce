import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Utils/Footer";
import NavBarLogIn from "./components/Utils/NavBarLogIn";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";

function App() {
  return (
    <Fragment>
      <NavBarLogIn />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Fragment>
  );
}

export default App;
