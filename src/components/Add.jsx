import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const Add = () => {

    const[product,setData]=useState(
        {
            "pid":'',
            "pname":'',
            "category":'',
            "price":''
        }
    )
    const inputHandler=(event)=>{
        setData({...product,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(product)
         axios.post("http://localhost:8088/add",product).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Sucessfully added")
                } else {
                    alert("error!")
                }
            }
        ).catch()
    }
  return (
    <div>
<Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">PId</label>
                            <input type="text" className="form-control" name='pid' value={product.pid} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">PName</label>
                            <input type="text" className="form-control" name='pname' value={product.pname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">category</label>
                            <input type="text" className="form-control" name='category' value={product.category} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">price</label>
                            <input type="text" className="form-control" name='price' value={product.price} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                            <button className="btn btn-primary" onClick={readValue}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Add