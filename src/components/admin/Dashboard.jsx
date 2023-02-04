import React from 'react'
import {Link} from "react-router-dom"
import {Doughnut} from "react-chartjs-2"
import {Chart as chartjs,Tooltip,ArcElement,Legend} from "chart.js"


chartjs.register(Tooltip,ArcElement,Legend)

const Box=({title,value})=>(
    <div>
        <h3>
        {title==="Income" && "₹"}
            {value}</h3>
        <p>{title}</p>
    </div>

)

const Dashboard = () => {

    const data={
      
        labels:["Processing","shipped","delevired"],
        datasets:[
            {
                label:"# of orders",
        data:[2,3,4],
        backgroundColor:["rgb(227, 196, 192)","rgb(208, 194, 246)","rgb(219, 247, 209)"],
        borderColor:["red","blue","green"],
        borderWidth:1,
            }
        ]
    };

  return (
    <section className="dashboard">
        <main>
            <article>
                <Box title="Users" value={213}/>
                <Box title="Orders" value={13}/>
                <Box title="Income" value={22213}/>
            </article>
            <section>
                <div>
                    <Link to="/admin/orders">View Orders</Link>
                    <Link to="/admin/users">View Users</Link>
                </div>
                <aside>
                    <Doughnut data={data}/>
                </aside>
            </section>
        </main>
    </section>
  )
}

export default Dashboard