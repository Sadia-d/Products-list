
import { useState } from 'react'
import './App.css'
import Carts from './Components/Carts'
import Products from './Components/Products'


function App() {

  const [carts , setCarts] = useState([])

  const handleCartsAdded = product =>{
    setCarts((prev) => {
      const exist = prev.find(p => p.id === product.id)
      if(exist){

         if (exist.stock <= 0) {      
        alert('Stock out!');
        return prev;
      }

       return prev.map(prod => prod.id === product.id ?{ ...prod , cartQuantity : prod.cartQuantity + 1 , stock : prod.stock - 1} : prod)
      }
    
      else{
        return [...prev, { ...product, cartQuantity: 1 , stock: product.stock - 1}]
      }
    })
  }

 
  const handleRemove = (id) => {
  setCarts((prev) => prev.filter((item) => item.id !== id));
};

  

  return (
    <>
        <div className='flex'>
          
          <div className='w-[70%]'>
               <Products 
               handleCartsAdded={handleCartsAdded}
               ></Products>
          </div>

          <div className='w-[30%] mt-7'>
             <Carts handleRemove={handleRemove} carts={carts}  > </Carts>
          </div>
     
        </div>
    </>
  )
}

export default App
