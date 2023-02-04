import React from 'react'
import {Link} from "react-router-dom"
import {AiFillEye} from "react-icons/ai"
import {GiArmoredBoomerang} from "react-icons/gi"

const Orders = () => {

    const arr=[1,2,3,4]

  return (
    <section className="tableclass">
        <main>
            <table>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Status</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>User</th>
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
                        <td>Nihar</td>
                        <td>
                            <Link to={`/order/${"asds"}`}>
                                <AiFillEye/>
                            </Link>
                            <button style={{marginLeft:"4px"}}>
                                <GiArmoredBoomerang/>
                            </button>
                        </td>
                    </tr>
                        ))
                    }
                </tbody>
            </table>
        </main>

    </section>
  )
}

export default Orders