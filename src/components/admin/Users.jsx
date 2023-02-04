import React from 'react'
import {Link} from "react-router-dom"
import {AiFillEye} from "react-icons/ai"
import kush from "../../assests/kp-modified.png"

const Users = () => {

    const arr=[1,2,3,4,5]

  return (
    <section className='tableclass'>
        <main>
            <table>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Photo</th>
                        <th>Role</th>
                        <th>Since</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arr.map(i=>(
                            <tr key={i}>
                        <td>#bskhnefkn</td>
                        <td>Kush</td>
                        <td>
                            <img src={kush} alt="" style={{
                                height:"40px",
                                width:"40px",
                                objectFit: "cover",

                            }} />
                        </td>
                        <td>Admin</td>
                        <td>{"24-12-2022"}</td>
                    </tr>
                        ))
                    }
                </tbody>
            </table>
        </main>
    </section>
  )
}

export default Users