import axios from 'axios'
import React, { useEffect, useState } from 'react'

function RatingComments(){
    const [value,setValue]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/RatingComments/post")
        .then((response)=>setValue(response.data))
        .catch(err=>console.log(err))
    },[])

    console.log(value)

    return (
        <div>
          {
            value.map((i,index)=>(
              <div key={index} className=''>
                <p>{i.RatingComments}</p>
                <p></p>
              </div>
            ))
          }
        </div>
      )


}