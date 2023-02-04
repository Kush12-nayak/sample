import React from 'react'
import { Link } from 'react-router-dom'
import kush from "../../assests/kp-modified.png"
import {MdDashboard} from "react-icons/md"
import {GiShoppingCart} from "react-icons/gi"
import {SlLogout} from "react-icons/sl"

const Profile = () => {
  return (
    <section className='profile'>

        <main>
            <img src={kush} alt="" />
            <h5>KUSH</h5>
            <div>
                <Link to="/admin/dashboard"><MdDashboard/>DashBoard</Link>
            </div>
            <div className='order'>
                <Link to="/myorders"><GiShoppingCart/>Orders</Link>
            </div>
            <div>
                <button><SlLogout/>LogOut</button>
            </div>
        </main>

    </section>
  )
}

export default Profile