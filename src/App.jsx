
import { useState } from 'react'
import './App.css'
import Carts from './Components/Carts'
import Products from './Components/Products'
import CartProd from './Components/CartProd'

function App() {

  const [carts , setCarts] = useState([])

  const handleCardUpdate =(product) =>{

   setCarts((prev) => {
          const exists = prev.some(p => p.id === product.id); 

          if(exists){
            return prev.map((prod) => prod.id === product.id ? {...prod, cartQuantity: prod.cartQuantity + 1 } : prod)
          }
          else{
            return [...prev, {...product, cartQuantity: 1}]
          }
      })
  }

  return (
    <>

      <div className='flex justify-center gap-5 w-full'>
        <div className='w-[70%]'>
          <Products handleCardUpdate={handleCardUpdate}></Products>
        </div>
        <div className='w-[30%]'>
          <Carts carts={carts}  ></Carts>
        </div>
      </div>
    </>
  )
}

export default App
