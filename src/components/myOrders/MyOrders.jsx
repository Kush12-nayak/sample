import React from 'react'
import {AiFillEye} from "react-icons/ai"
import {Link} from "react-router-dom"

const MyOrders = () => {

    const arr=[1,2,3,4,5]

  return (
    <section className='tableclass'>
        <main>
            <table>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Status</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arr.map(i=>(
                            <tr key={i}>
                        <td>#bskhnefkn</td>
                        <td>Processing</td>
                        <td>4</td>
                        <td>₹{567}</td>
                        <td>COD</td>
                        <td><Link to={`/order/${"asds"}`}><AiFillEye/></Link></td>
                    </tr>
                        ))
                    }
                </tbody>
            </table>
        </main>

    </section>
  )
}

export default MyOrders