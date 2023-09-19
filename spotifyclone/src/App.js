
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from './component/layout/Layout';
import HomePage from './page/home/HomePage';



function App() {
  return (
  
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout />}>
         <Route path="HomePage" element={<HomePage />} />
       
       </Route>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
