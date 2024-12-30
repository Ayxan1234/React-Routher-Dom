import React from 'react'
import './box.css'
import { useNavigate } from 'react-router'

const Box = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className='box'>
      <div className='img'>
        <img
          src={item.image}
          alt=""
        />
      </div>
      <div className="box-body">
        <h2>{item.title}</h2>
        <span>price:{item.price}</span>
        <button onClick={() => navigate(`/detail/${item.id} `)}>Detail page</button>
      </div>
      <div>


      </div>
    </div>

  )
}

export default Box