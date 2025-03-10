import axios from "axios";
import { useEffect, useState } from "react";
function Delete(){
    const [products,setProducts]=useState([])
 useEffect(()=>{
        axios.get("https://server-gwet.onrender.com/delete").then(res=>{setProducts(res)
            console.log(res)
        })
   },[])
   async function handledelete(id){
    console.log(id)
        var did=Number(id)
        await axios.delete(`https://server-gwet.onrender.com/delete/${did}`).then(res=>{setProducts(res)
            alert('Data Deleted Successfully')
        })

   }
   return(
    <>
    <div className="container-fluid">
      <div className="row">
          {products.map((product)=>{
            return(
              <div className="col col-product" >
              <div className="card" onClick={()=>{handledelete(product.id)}} style={{width:"16rem"}}>
                 <img src={product.img} className="card-img-top" alt="" />
                 <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <h4 className="card-title text-danger">₹{product.prize}</h4>
                  <p className="card-text">{product.description}</p>
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
export default Delete;
