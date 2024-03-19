import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './css/Product.css'

export const Product = () => {

  useEffect(()=>{
    axios.get('http://localhost:3001/Students')
        .then((res)=>{
            setUserList(res.data)
        })
        .catch((res)=>{
            console.log("Error"+res)
        })
  },[])

  const [userlist, setUserList] = useState([])

  return (
    <div className='user-container'>
      {userlist.map(x=>(
        <div className='single-user'>
        <img className="image-user" alt="user profile" src={x.image}/>
        <h4>Identification Number:{x.id}</h4>
        <h4> Name:{x.name}</h4>
        <h4> Contact:{x.age}</h4>

      </div>
      ))}
        
    </div>
  )
}