
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from './component/layout/Layout';
import HomePage from './page/home/HomePage';
import LoginPage from './page/auth/LoginPage';
import SignupPage from './page/auth/SignupPage';
import Footer from './component/header/Footer';
import FooterSignup from './component/header/FooterSignup';
import SearchPage from './component/header/SearchPage';
import MobileNavbar from './component/navbar/MobileNavbar'

function App() {
  return (
  
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout />}>
       <Route path="HomePage" element={<HomePage />} />
       <Route path="Footer" element={<Footer />} />
       <Route path="FooterSignup" element={<FooterSignup />} />
       <Route path="SearchPage" element={<SearchPage />} />
        
         
       
       </Route>
       <Route path="MobileNavbar" element={<MobileNavbar />} />

       <Route path="LoginPage" element={<LoginPage />} />
         <Route path="SignUpPage" element={<SignupPage />} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
