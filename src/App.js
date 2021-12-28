import Products from "./components/Products";
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from "./components/Form";

import { BrowserRouter, Routes, Route}  from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {

 
  return (

    <div>
      
     
      <BrowserRouter>

      <Navbar/>

           <Routes>
                  <Route path='/products'  element={<Products/>} />
                  <Route path='/form' element={<Form/>} />
           </Routes>
      </BrowserRouter>
     
     

    
    </div>

  );


}

export default App;
