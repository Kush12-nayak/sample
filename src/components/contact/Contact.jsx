import React from 'react'
import {motion} from "framer-motion"


const Contact = () => {
  return (
    <section className='contact'>
        <motion.form>
            <h2>CONTACT US</h2>
            <input type="text" placeholder='Name' />
            <input type="email" placeholder="Email" />
            <textarea  cols="30" rows="30" placeholder='Message...'></textarea>
            <button>Send</button>
        </motion.form>
    </section>
  )
}

export default Contact