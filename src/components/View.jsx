import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'

const View = () => {
    const [data,changeData]=useState([])
    const fetchData=()=>{
        axios.post("http://localhost:8088/view").then(
            (response)=>{
                console.log(response.data)
                changeData(response.data)
            }
        ).catch()
      }
  useEffect(()=>{(fetchData())},[])
  return (
    <div>
       <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                    <div className="row g-3">
                        {data.map(
                            (value,index)=>
                                {
                                return <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                            <div class="card">
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">{value.pid}</li>
                                                    <li class="list-group-item">{value.pname}</li>
                                                    <li class="list-group-item">{value.category}</li>
                                                    <li class="list-group-item">{value.price}</li>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                }
                            )
                            
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View