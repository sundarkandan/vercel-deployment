import axios from "axios";
import { useEffect, useState } from "react";
function Update(){
        
        const [products,setProducts]=useState([])
     useEffect(()=>{
            axios.get("http://localhost:3400/update").then(res=>{setProducts(res.data)
                console.log(products)
            })
       },[])

       async function reload(){
        await axios.get("http://localhost:3400/update").then(res=>{setProducts(res.data)
            console.log(products)
        })
       }
       async function handleupdate(index){
        console.log(index)
        var qty=Number(prompt("Enter the New Stock Count"))
        var pro=products[index]
        await axios.patch('http://localhost:3400/update',{pro,qty}).then(res=>alert("avaliable only "+res.data+" stocks"))
        reload()
       }
       return(
        <>
        <div className="container-fluid">
          <div className="row">
              {products.map((product,index)=>{
                return(
                  <div className="col col-product" >
                <div className="card" onClick={()=>handleupdate(index)} style={{width:"16rem"}}>
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
export default Update