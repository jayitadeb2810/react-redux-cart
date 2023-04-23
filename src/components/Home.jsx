import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'


const Home = () => {

const dispatch = useDispatch()

const addToCartHandler = (options)=>{
    console.log(options)
    dispatch({type: "addToCart", payload:options})
    dispatch({type: "calculatePrice"})
    toast.success('Added To Cart')
}



const productList =[{id: '12345@',
                name:'rebok shoe',
                price: 1200,
                imgsrc: './images/Rebok_shoe.jpg',
            },
                {id: '56789@',
                name:'zara top',
                price: 3000,
                imgsrc: './images/zara_top.jpg',
            },]
  return (
    <div className='home'>
        {productList.map(i=>(
            <ProductCard 
                id={i.id}
                key={i.id}
                name={i.name}
                price={i.price}
                imgsrc={i.imgsrc}
                handler={addToCartHandler}
            />
        ))
        }
    </div>
  )
}

const ProductCard = ({name, id, price, imgsrc, handler})=>(
    <div className='productcard'>
        <img src={imgsrc} alt={name} />
        <p>{name}</p>
        <h3>${price}</h3>
        <button onClick={()=>{handler({id, name, price, imgsrc, quantity:1})}} >Add To Cart</button>
    </div>
)

export default Home