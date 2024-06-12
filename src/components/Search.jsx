import axios from 'axios'
import React, { useState } from 'react'

const Search = () => {
    const[product,setData]=useState(
        {
            "pid":''
        }
    )

    const [result, setResult] = useState([])

    const deleteproduct = (id) =>{
        let input = { "_id": id}
        axios.post("http://localhost:8088/delete",input).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                    {
                        alert("Sucessfully Deleted")
                    }
                else
                {
                    alert("Error in deletion")
                }
            }
        ).catch()
    }

    const inputHandler=(event)=>{
        setData({...product,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(product)
        axios.post("http://localhost:8088/search",product).then(
            (response) => {
                    setResult(response.data)
            }
        ).catch()
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl 12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">PId</label>
                            <input type="text" className="form-control" name='pid' value={product.pid} onChange={inputHandler}/>
                        </div><br></br>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                            <button className="btn btn-success" onClick={readValue}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Pid</th>
                                    <th scope="col">name</th>
                                    <th scope="col">cateogry</th>
                                    <th scope="col">price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result.map(
                                    (value, index) => {
                                        return <tr>
                                            <th>{value.pid}</th>
                                            <td>{value.pname}</td>
                                            <td>{value.category}</td>
                                            <td>{value.price}</td>
                                            <button className="btn btn-danger" onClick={()=>{deleteproduct(value._id)}}>Delete</button>
                                        </tr>
                                    }
                                )

                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Search