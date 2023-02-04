import React,{useState} from 'react'
import Menucard from "./Menucard"
import burger1 from "../../assests/burger1.png"
import burger2 from "../../assests/burger2.png"
import burger3 from "../../assests/burger3.png"

import "../../styles/color.scss"

import french from "../../assests/french.jpg"
import puf from "../../assests/pizza puff.jpg"
import taco from "../../assests/tacos.jpg"

import cola from "../../assests/cola.jpg"
import smoothie from "../../assests/smoothie.jpg"
import shake from "../../assests/chocolate.jpg"



const Menu = () => {

  const addtocarthandler=(itemNum)=>{

  }

  const burgerlist=[{
    itemNum:1,
     burgerSrc:burger1,
     price:300,
     title:'Cheese Burger'
  }
  ,{
    itemNum:2,
    burgerSrc:burger2,
    price:200,
    title:'Veg Cheese Burger'
  },{
    itemNum:3,
    burgerSrc:burger3,
    price:400,
    title:'Aloo tiki Burger'
  }
  ]

  const snacks=[{
    itemNum:1,
     burgerSrc:french,
     price:100,
     title:'French Fries'
  }
  ,{
    itemNum:2,
    burgerSrc:puf,
    price:70,
    title:'Puff Pizza'
  },{
    itemNum:3,
    burgerSrc:taco,
    price:230,
    title:'Vegetable Taco'
  }]

  const beverages=[{
    itemNum:1,
     burgerSrc:cola,
     price:60,
     title:'Cola'
  }
  ,{
    itemNum:2,
    burgerSrc:smoothie,
    price:120,
    title:'Smoothie'
  },{
    itemNum:3,
    burgerSrc:shake,
    price:180,
    title:'Chocolate Shake'
  }]

  const myfunction=(active,de1,de2,btn)=> {
  
    
    let x=document.querySelector(`.${active}`)
    let y=document.querySelector(`.${de1}`)
    let z=document.querySelector(`.${de2}`)

    let bt1=document.querySelector(`.${btn}`)
    

    x.style.display="flex";
    y.style.display="none"
    z.style.display="none"

  }

  const btncolor=(button,de1,de2)=>{

    let btn=document.querySelector(`.${button}`)
    let debt1=document.querySelector(`.${de1}`)
    let debt2=document.querySelector(`.${de2}`)

    console.log("hi")
    
    btn.style.backgroundColor = 'rgb(190, 118, 146)'; 
    debt1.style.backgroundColor='rgb(156,0,60)';
    debt1.style.color="white"
    debt2.style.backgroundColor='rgb(156,0,60)';
    debt2.style.color="white"
  }

  var burger

  const [show,setshow]=useState(true)


  return (
    <section id='menu'>
      <h1>MENU</h1>
      {
          // show?()=>myfunction('burger','snacks','beverages'):null
          // window.onload=()=>myfunction('burger','snacks','beverages')
      }
      <div className='btn'>
        <button className='btburger' onClick={() => {myfunction('burger','snacks','beverages','btburger',btncolor('btburger','btsnack','btbev'))}}>Burger</button>
        <button className='btsnack' onClick={() => {myfunction('snacks','burger','beverages','btsnack',btncolor('btsnack','btburger','btbev'))}}>Snacks</button>
        <button className='btbev' onClick={() => {myfunction('beverages','snacks','burger','btbev',btncolor('btbev','btburger','btsnack'))}}>Beverages</button>
      </div>
     <div className='burger'>
     {
        burgerlist.map((i)=>(
          <Menucard
          itemNum={i.itemNum}
          burgerSrc={i.burgerSrc}
          price={i.price}
          title={i.title}
          handler={addtocarthandler} />
        ))
      
      }
      </div>
      <div className='snacks' style={{
        display:"none"
      }}>
      {
        snacks.map((i)=>(
          <Menucard
          itemNum={i.itemNum}
          burgerSrc={i.burgerSrc}
          price={i.price}
          title={i.title}
          handler={addtocarthandler}/>
        ))
      }
      </div>
      <div className='beverages'style={{
        display:"none"
      }}>
      {
      beverages.map((i)=>(
          <Menucard
          itemNum={i.itemNum}
          burgerSrc={i.burgerSrc}
          price={i.price}
          title={i.title}
          handler={addtocarthandler}/>
        ))
      }
      </div>
      
     {/* <Menucard
     itemNum={1}
     burgerSrc={burger1}
     price={300}
     title={'Cheese Burger'}
     handler={addtocarthandler}/>
     <Menucard
     itemNum={2}
     burgerSrc={burger2}
     price={200}
     title={'Veg Cheese Burger'}
     handler={addtocarthandler}/>
      <Menucard
     itemNum={3}
     burgerSrc={burger3}
     price={400}
     title={'Aloo tiki Burger'}
     handler={addtocarthandler}/> */}
     {
      
     }
    </section>
  )
}

export default Menu