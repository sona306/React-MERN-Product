import React from 'react'

const Search = () => {
    const[product,setData]=useState(
        {
            "pid":''
        }
    )
    const inputHandler=(event)=>{
        setData({...product,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(product)
    }
  return (
    <div>
        <NavBar/>
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
    </div>
  )
}

export default Search