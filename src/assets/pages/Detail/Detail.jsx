import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import './Detail.css'

const Detail = () => {
const[data, setData] = useState({});

const navigate = useNavigate();
const {id} =useParams();



const getApi = async () => {
  try {
      await axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res)=>{
        setData(res.data);
      })
            setData(res.data)
  } catch (error) {
      console.log(error);
  }
};



useEffect(()=>{

  if (id) {
    getApi()
    console.log(data);
    
  }


},[id])


  return (
    <>
    
    <main>
        <section className='detailssec'>
            <h1>Product Detail Page</h1>
            <button className='touch' onClick={() => navigate("/")}>Ana Sehifeye Qayit</button>
            </section>
        <section className='twodetails-sec'>
          <h1>{data.title}</h1>
          <img src={data.image} alt="" />
          <h2>{data.description}</h2>
          <div className="threedetails-sec">
            <button>Bayrama gore nagd alisda 20% endirim</button>
          </div>
          
        </section>
    </main>
    
    </>
  )
}

export default Detail