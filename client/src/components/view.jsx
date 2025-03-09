import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
function View(){
    const location = useLocation();
    const { product } = location.state || {}; 
    console.log(product)
    var [pimg,setPimg]=useState(product.img)
    var camara_rear=product.camara_rear
    var [qty,setQty]=useState(0)
    async function handleclick(){
        await axios.patch('http://localhost:3400/view',{product,qty}).then(res=>alert("avaliable only "+res.data+" stocks")).then(window.print())
    }
    return(
       <>
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <img id="display-item" className="img-thumbnail" src={pimg}/>
                    <div className="cont">
                    <img width="100px"onClick={()=>{setPimg(product.img)}} className=' img-thumbnail' src={product.img} alt=""/>
                    <img width="100px" onClick={()=>{setPimg(product.imgs[0])}} className=' img-thumbnail' src={product.imgs[0]} alt=""/>
                    <img width="100px" onClick={()=>{setPimg(product.imgs[1])}} src={product.imgs[1]} alt="" className="img-thumbnail" /> 
                    </div>
                </div>
                <div className="col">
                    <h1 className="display-5">{product.name}</h1>
                   <br />
                    <h2 className="text-danger"><span className="text-secondary">Prize:</span>₹{product.prize}/only</h2>
                    <input type="Number" className="mt-5" placeholder="Qty" onChange={(e)=>setQty(e.target.value)} id="qty"/><button className="d-print-none btn btn-success ms-4" onClick={()=>{
                        var conform=confirm("Are You Sure Do You Want to buy This Product?")
                        if(conform){
                            handleclick()
                        }
                    }}>Buy Now</button>
                   
                    <p className="mt-5"><b>Product Info:</b></p>
                    <p><b>Model Name : </b>{product.name}</p>
                    <p><b>Ram : </b>{product.ram}GB</p>
                    <p><b>Storage : </b>{product.storage}GB</p> 
                    <p><b>Rear Camara : </b>{camara_rear.map((mp)=>{return mp+"mp "})}</p>
                    <p><b>Front Camara : </b>{product.camara_front}mp</p>
                    <p><b>Processor Chipset : </b>{product.processor_chipset}</p>





                </div>
            </div>
        </div>
        </>
    )
}
export default View;