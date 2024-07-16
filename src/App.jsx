import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import data from "./data.json";
// const {reviews, products} = data;

import './App.css';


import { Home } from './pages/Home/Home';
import {Cart} from "./pages/Cart";
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ShoppingCart } from './pages/ShoppingCart.jsx/ShoppingCart';
import { Payment } from './pages/Payment/Payment';



function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
//   const [loading, setLoading] = useState(true);
//   const [products, setProducts] = useState(null);
//   const [error, setError]= useState(null);
//   const [page, setPage] = useState(1)

//   useEffect(()=>{
//  setLoading(true);
//  setError(null)
 
// const URL = `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=a52557c210d74e21bcc0cdd12418b641&reverse_sort=false&page=${page}&size=3&Appid=64T060XLW2WAWI0&Apikey=52280394a72741fcabd8841362e615cd20240712161453950230`

 
//     const fetchData =  async ()=>{
      

//        try {
//         const response =  await fetch(URL);
//         //check if the res is successful

//         if(!response.ok){
//           throw new Error(`HTTP error! status: ${response.status}`)
//         }

//         const result = await response.json();
//         setProducts(result)
//         console.log(result);
//        } catch (error) {
//         setError(error.message)
//        } finally {
//         setLoading(false)
//        }
//     };
//     fetchData()
//   },[page])


//   // Conditional rendering based on the state
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

  return (
   <Router>
    <Header/>
    <main>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart/>}>  </Route>
        <Route path="/shopping" element={<ShoppingCart/>}/>
        <Route path='/payment' element={<Payment/>} />
      </Routes>

    </main>
    <Footer/>
   </Router>
  )
}

export default App
