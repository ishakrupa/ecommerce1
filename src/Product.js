import React,{useContext} from 'react'

import "./Product.css"
import  {useStateValue } from './StateProvider'




const Product = ({id,title,price,rating,image}) => {
 const [state, dispatch] = useStateValue();


const addtobasket =()=>{
  dispatch({
    type:"ADD_TO_BASKET",
    
    item:{
      id:id,
      image:image,
      price:price,
      rating:rating,
    },
  })
}



  return (
    <div className="product">
      <div className="product_info">
      <p >{title}</p>
      <p className="price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className="product_rating"> 
      {Array(rating)
      .fill()
      .map((i)=>(
         <p> ⭐ </p>
      ))}
      
      </div>
      </div>
      <img src={image} alt=""/>
      <button onClick={addtobasket} >Add to Basket</button>
    </div>
  )
}

export default Product