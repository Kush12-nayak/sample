import React from 'react'
import {motion} from "framer-motion"
import Founder from "./Founder"
import Menu from "./Menu"
import Footer from "./Footer"

const Home = () => {

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
    <>
      <section className='home'>
       <div>
        <motion.h1 {...options}>MBA BURGER WALA</motion.h1>
        <motion.p {...options} transition={{
          delay:0.2
        }}>We Provide Best Burger's</motion.p>
      </div>
      <a href="#menu">
        Explore Menu
      </a>
    </section>
    <Founder/>
    <Menu/>
        
    </>
    
  )
}

export default Home