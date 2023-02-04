import React from 'react'
import {motion} from "framer-motion"
import burger1 from "../../assests/burger1.png"

const Menucard = ({itemNum,burgerSrc,price,title,handler}) => {

  const options={
    initial:{
      x:"-100%",
      opacity:0
    },
     whileInView:{
      x:"0",
    opacity:1}
  }


  return (
    <motion.div className='menucard' {...options}>
        <div>
            Item {itemNum}
        </div>
        <main>
            <img src={burgerSrc} alt="" />
            <h5>₹{price}</h5>
            <p>{title}</p>
            <button onClick={()=>handler(itemNum)}>Buy Now</button>
        </main>
    </motion.div>
  )
}

export default Menucard