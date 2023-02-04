import React from 'react'

const OrderDetails = () => {
  return (
    <section className='orderdetails'>
        <main>
            <h1>Order Details</h1>
            <div>
                <h1>Shipping</h1>
                <p>
                    <b>Address:</b>
                    {'A-602,Madhav-Pride'}
                </p>
            </div>
            <div>
                <h1>Contact</h1>
                <p>
                    <b>Name:</b>
                    {'Kush'}
                </p>
                <p>
                    <b>Phone No:</b>
                    {'9157490665'}
                </p>
            </div>
            <div>
                <h1>Status</h1>
                <p>
                    <b>Order Status:</b>
                    {'Processing'}
                </p>
                <p>
                    <b>Placed At:</b>
                    {'27-05-2022'}
                </p>
                <p>
                    <b>Delivered At:</b>
                    {'27-05-2022'}
                </p>
            </div>
            <div>
                <h1>Payment</h1>
                <p>
                    <b>Payment Method:</b>
                    {'COD'}
                </p>
                <p>
                    <b>Paymen ref:</b>
                    #{'ebieahif'}
                </p>
                <p>
                    <b>Paymen At:</b>
                    {'23-06-2022'}
                </p>
            </div>
            <article>
                <h1>Ordered Items</h1>
                <div>
                    <p>Cheese Burger</p>
                    <div>
                    <span>{2}</span> x
                    <span>{120}</span>
                    </div>
                </div>
            </article>
            <div>
                <h1>Amount</h1>
                <p>
                    <b>Items Total:</b>
                    ₹{2345}
                </p>
                <p>
                    <b>Shipping Charges:</b>
                    ₹{200}
                </p>
                <p>
                    <b>Tax:</b>
                    ₹{100}
                </p>
                <p>
                    <b>Total Amount:</b>
                    ₹{2560}
                </p>
                
            </div>
        </main>

    </section>
  )
}

export default OrderDetails