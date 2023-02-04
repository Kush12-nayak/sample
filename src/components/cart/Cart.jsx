import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import { Link } from 'react-router-dom'
import burger1 from "../../assests/burger1.png"

const item=10

const Cart = () => {

    const increament=(id)=>{

    }

    const decreament=(id)=>{

    }

    const delhandler=(id)=>{

    }

  return (
    <section className='cart'>
        <main>
            <Cartitem
            title={'Cheese Burger'}
            price={200}
            quantity={1}
            imgsrc={burger1}
            increament={1}
            decreament={1}
            delhandler={1}
            id={'d'}/>
            <Cartitem
            title={'Cheese Burger'}
            price={200}
            quantity={1}
            imgsrc={burger1}
            increament={1}
            decreament={1}
            delhandler={1}
            id={'d'}/>
            <Cartitem
            title={'Cheese Burger'}
            price={200}
            quantity={1}
            imgsrc={burger1}
            increament={1}
            decreament={1}
            delhandler={1}
            id={'d'}/>
            <Cartitem
            title={'Cheese Burger'}
            price={200}
            quantity={1}
            imgsrc={burger1}
            increament={1}
            decreament={1}
            delhandler={1}
            id={'d'}/>
            <Cartitem
            title={'Cheese Burger'}
            price={200}
            quantity={1}
            imgsrc={burger1}
            increament={1}
            decreament={1}
            delhandler={1}
            id={'d'}/>
            <Cartitem
            title={'Cheese Burger'}
            price={200}
            quantity={1}
            imgsrc={burger1}
            increament={1}
            decreament={1}
            delhandler={1}
            id={'d'}/>
            
        </main>
        <aside>
            <div>
                <h3>SubTotal:</h3>
                <p>₹{2000}</p>
            </div>
            <div>
                <h3>Shipping:</h3>
                <p>₹{200}</p>
            </div>
            <div>
                <h3>Text:</h3>
                <p>₹{200*0.18}</p>
            </div>
            <div>
                <h3>Total: ${200+200+200*0.18}</h3>
                <p>₹{200+200+200*0.18}</p>
            </div>
        </aside>
        <Link to="/shipping">Checkout</Link>
        
    </section>
  )
}

const Cartitem=({title,price,quantity,imgsrc,increament,decreament,delhandler,id})=>(

    <div className='cartitem'>
        <article>
        <img src={imgsrc} alt="" />
            <p>{title}</p>
            <p>₹{price}</p>
        </article>
        <div>
            <button onClick={()=>decreament(id)}>-</button>
                <p>{quantity}</p>
            <button onClick={()=>increament(id)}>+</button>
        </div>
        <AiFillDelete onClick={()=>delhandler(id)}/>
    </div>

)


export default Cart