import React,{useState,useEffect} from 'react'
import {Country,State} from "country-state-city"


const Shipping = () => {


  // function Getcountry(){

  //   const [t1,settext]=useState("hi")

  //   useEffect(() => {
      
  //     let country=document.getElementById('country')
  //     settext=country.value
  //   },)
  
  //   return t1;
  
  // }

  return (
    <section className='shipping'>
      <main>
        <h1>Shipping Details</h1>
        <form action="">
          <div>
            <label htmlFor="">H.No</label>
            <input type="text" placeholder='Enter House No' />
          </div>
          <div>
            <label htmlFor="">City</label>
            <input type="text" placeholder='Enter City' />
          </div>
          <div>
            <label htmlFor="">Country</label>
            <select id='country'>
            <option value="">Country</option>
             {
              Country && Country.getAllCountries().map((i)=>(
                <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
              ))
             }
            </select>
          </div>
          <div>
            <label htmlFor="">State</label>
            <select>
              <option value="">State</option>
              {
                State && State.getStatesOfCountry(`IN`).map((i)=>(
                  <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                ))
              }
            </select>
          </div>
          <div>
            <label htmlFor="">Pincode</label>
            <input type="number" placeholder='Enter PinCode' />
          </div>
          <div>
            <label htmlFor="">Phone No</label>
            <input type="number" placeholder='Enter Phone No' />
          </div>
          <button type='submit'>Confirm Order</button>
        </form>
      </main>
    </section>
  )
}

export default Shipping