import React from 'react'
import Product from "../src/Product.js"
import "./HomePage.css"
import Homepage from "../src/photos/Homepage.jpg"
import Products from"../src/photos/products.avif"
import Products1 from "../src/photos/product1.avif"
import Products2 from "../src/photos/product2.avif"
import Products3 from "../src/photos/product3.avif"
import Products4  from "../src/photos/product4.jpeg"
import Products5  from "../src/photos/product5.jpeg"
import Products6   from "../src/photos/product6.jpeg"
const HomePage = () => {
  return (
    <>
 <div className="Home">
    <img src={Homepage} alt=""  className='Home_image'/>
 </div>

<div className="Home_row">
<Product
id= "256839"
 title ="High heavy embroided with crop top" 
price={12000}
rating ={4}
image={Products}
/>
<Product
id= "256838"
title ="Sparkle heavy embroided with crop top" 
price={11000}
rating ={5}
image={Products1}

/>
</div>
    
<div className="Home_row">
<Product
id= "256837"
title ="Madhubala heavy embroided with crop top" 
price={10000}
rating ={4}
image={Products2}
/>
<Product
id= "256837"
title ="Chandrakela embroided with crop top" 
price={10009}
rating ={4}
image={Products3}



/>
<Product
id= "256836"
title ="Sowndaraya embroided with top" 
price={11000}
rating ={5}
image={Products4}


/>
</div>

<div className="Home_row">
<Product 
id= "256835"
title ="Sizzling Frocks" 
price={11500}
rating ={3}
image={Products5}

/>
<Product 
id= "256834"
title ="Dancing bridals " 
price={115000}
rating ={5}
image={Products6}



/>
</div>
    
    
    
    
    </>




  )
}

export default HomePage