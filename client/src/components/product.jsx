import Img from "../images/main.png"
import "./main.css"

import View from './view'
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Product(){
  const [Data,setData]=useState([])

  useEffect(()=>{
      axios.get("http://localhost:3400/product").then((res)=>{setData(res.data)
     
    }).then( console.log("c"+Data))
  },[])
    return(
      <>
      <div className="container-fluid">
        <div className="row">
            {Data.map((product)=>{

              return(
                <div className="col mb-5 col-product" >
                <div id="product-card" className="card" style={{width:"16rem"}}>
                   <img src={product.img} className="card-img-top" alt="" />
                   <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <h4 className="card-title text-danger">₹{product.prize}</h4>
                    <p className="card-text">{product.description}</p>
                  
                    {product.stocks==0?<p className="cart-text text-danger">Product unAvaliable</p>:product.stocks<=10?<p className="cart-text text-danger">Only {product.stocks} Stocks Left</p>:""}
                    <Link to="/view" style={{display:product.stocks==0?"none":''}}  state={{ product }}><button className="btn btn-warning ps-5 pe-5">View</button></Link>
               </div>
            </div>
                   
        </div> 
        
              )
            })}
        </div>
      </div>
      </>
    )
}

export default Product;