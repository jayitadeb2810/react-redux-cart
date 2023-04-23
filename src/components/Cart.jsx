import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import {FaDumpster} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {

  const { subtotal, crtItems,  shippingcharge, tax, total } = useSelector((state)=>state.cart);
  const dispatch = useDispatch();
  console.log(crtItems)
  const increamentHandler = (id)=>{
    dispatch({type:"addToCart", payload:{id}})
    dispatch({type: "calculatePrice"})
  }
  
  const decreamentHandler = (id)=>{
    dispatch({type:"decreament", payload:id})
    dispatch({type: "calculatePrice"})
  }
  
  const deleteHandler = (id)=>{
    dispatch({type:"dlthandler", payload:id})
    dispatch({type: "calculatePrice"})
  }

  return (
    <div className='cart' >
      <main>{crtItems.length > 0 ?
          
        crtItems.map(i=>(
        <CartItem  
        imgsrc ={i.imgsrc}
        price = {i.price}
        id={i.id}
        name={i.name}
        qty={i.quantity}
        increament={increamentHandler}
        decreament={decreamentHandler}
        dlthandler={deleteHandler}
        
        />))
        :
        <div>Cart is empty</div>
        }
        
      </main>
      <aside>
        <h2>Subtotal: $ {subtotal}</h2>
        <h2>Shipping: $ {shippingcharge}</h2>
        <h2>Tax: $ {tax}</h2>
        <h2>Total: $ {total}</h2>
      </aside>
    </div>
  )
}

const CartItem = ({imgsrc, price, id, name, increament, decreament, dlthandler, qty})=>(
  <div className="cartItem">
    <img src={imgsrc} alt={name}  />
    <article>
      <h2>{name}</h2>
      <p>{price}</p>
    </article>
  
    <div>
      <button onClick={()=>increament(id)} >+</button>
      <p>{qty}</p>
      <button onClick={()=>decreament(id)} >-</button>
    </div>
    < FaDumpster onClick={()=>dlthandler(id)} />
  </div>

)
export default Cart