import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/layout/Layout";
import HomePage from "./page/home/HomePage";
import LoginPage from "./page/auth/LoginPage";
import SignupPage from "./page/auth/SignupPage";
import SearchPage from "./component/header/SearchPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="SearchPage" element={<SearchPage />} />

        </Route>


        <Route path="LoginPage" element={<LoginPage />} />
        <Route path="SignUpPage" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
