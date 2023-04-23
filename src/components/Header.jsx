import React from 'react'
import { Link } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux'


const Header = () => {

const {crtItems} = useSelector(state=>state.cart)
  return (
    <nav>
        <h1>LOGO</h1>
        <div className='navigation'>
            <Link to={'/'}> Home</Link>
            <Link to={'/Cart'}> < FaShoppingCart /></Link>
            
            <p>{crtItems.length}</p>
        </div>
    </nav>  )
}

export default Header