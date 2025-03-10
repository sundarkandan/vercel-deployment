import { useState } from "react";
import axios from "axios";
function Add(){
    var[field,setField]=useState([])
    var[field2,setField2]=useState([])
    var rid=Date.now()
    var [products,setProducts]=useState({id:rid,name:"",brand:"",prize:"",ram:0,storage:0,camara_rear:[],camara_front:0,stocks:0,processor_chipset:"",img:"",imgs:[],description:""})

    function addField(val){
       if(val==1){
        setField([...field,""])
       }
       if(val==2){
        setField2([...field2,""])
       }
    }
    
    async function send(){
        await axios.post("http://localhost:3400/Add",products).then(res=>(alert(res.data)))
    }

    function handle(index,value){
       console.log(index,value)
       var loc=products.camara_rear
       loc[index+1]=Number(value)
       setProducts({...products,camara_rear:loc})
    }
    function handleimg(index,value){
        console.log(index,value)
        var loc=products.imgs
        loc[index]=value
        setProducts({...products,imgs:loc})
     }
    function deleteField(val){
       if(val==1){
        setField([])
       }
       if(val==2){
        setField2([])
       }
    }
  
                    
    return(
        <>
            <div className="container">
                <center><h1 className="display-5"><b>Add Mobile</b></h1></center>
               <div className="add-row">
               <div className="col-3">
                <label htmlFor="" className="form-label">Enter the Mobile Name:</label><input name="name" onChange={(e)=>{
                     setProducts({...products,[e.target.name]:e.target.value})
                     
                }}  type="text"  className="form-control"/>
                </div>
                <div className="col-3">
                <label htmlFor="" className="form-label">Enter the Mobile's Brand:</label><input name="brand" type="text" onChange={(e)=>{
                     setProducts({...products,[e.target.name]:e.target.value})
                     
                }} className="form-control"/>
                </div>
                <div className="col-3">
                <label htmlFor="" className="form-label">Enter the Mobile Prize:</label><input name="prize" type="Number"  onChange={(e)=>{
                     setProducts({...products,[e.target.name]:e.target.value})
                     
                }}  className="form-control"/>
                </div>
                <div className="col-3">
                <label htmlFor="" className="form-label">Enter the Mobile Ram:</label><input name="ram" type="Number"  onChange={(e)=>{
                     setProducts({...products,[e.target.name]:e.target.value})
                     
                }}  className="form-control"/>
                </div>
                <div className="col-3">
                <label htmlFor="" className="form-label">Enter the Mobile Rom:</label><input name="storage"  onChange={(e)=>{
                     setProducts({...products,[e.target.name]:[e.target.value]})
                     
                }}  type="Number"  className="form-control"/>
                </div>
                    <div className="col-6">
                    <label htmlFor="" className="form-label"    >Enter the Primary Camara MP</label>
                    <input type="Number" name="camara_rear" onChange={(e)=>{
                     setProducts({...products,[e.target.name]:[Number(e.target.value)]})
                     
                }} className="form-control" />
                    </div>
                    {field.map((ele,index)=>{
                        return(
                            <div className="col-6" key={index}>
                            <label htmlFor="" className="form-label">Enter the Secondary Camara MP</label>
                            <input type={ele} name="camara_rear" className="form-control"  onChange={(e)=>{handle(index,e.target.value)}}/>
                            </div>
                        )
                    })} 
                    <div className="col-12"><center><button onClick={()=>{addField(1)
                    }} className="btn btn-primary">Add Secondary Camara MP</button><button onClick={()=>{deleteField(1)
                        setProducts({...products,camara_rear:[]})
                    }} className="btn btn-danger">Cancel Secondary Camara</button></center></div>
                    
                    
                    <div className="col-3">
                <label htmlFor="" className="form-label">Enter the Front Camara MP:</label><input name="camara_front"  onChange={(e)=>{
                     setProducts({...products,[e.target.name]:e.target.value}) 
                }}  type="Number"  className="form-control"/>
                </div>


                <div className="col-4">
                <label htmlFor="" className="form-label">Enter the Avaliable Stocks:</label><input type="Number"  onChange={(e)=>{
                     setProducts({...products,[e.target.name]:Number(e.target.value)})
                     
                }}  name="stocks" className="form-control"/>
                </div>
                <div className="col-4">
                <label htmlFor="" className="form-label">Enter the processor chipset:</label><input type="text"  onChange={(e)=>{
                     setProducts({...products,[e.target.name]:e.target.value})
                     
                }}  name="processor_chipset" className="form-control"/>
                </div>
                <div className="col-6">
                    <label htmlFor="" className="form-label">Enter Main Image Url</label>
                    <input type="text" name="img" onChange={(e)=>{
                    setProducts({...products,[e.target.name]:e.target.value})
                     
                }}  className="form-control"  placeholder="image ratio:(1:1)"/>
                    </div>
                    {field2.map((ele,index)=>{
                        console.log(ele)
                        return(
                            <div className="col-6" key={index}>
                            <label htmlFor="" className="form-label">Enter the Secondary Image Url</label>
                            <input type={ele} className="form-control" name="imgs" onChange={(e)=>handleimg(index,e.target.value)} placeholder="image ratioL:(1:1)"/>
                            </div>
                        )
                    })} 
                    <div className="col-12"><center><button onClick={()=>addField(2)} className="btn btn-primary">Add  Secondary Image Url</button><button onClick={()=>deleteField(2)} className="btn btn-danger">cancel Secondary Image Url</button></center></div>
                    <div className="col-3"></div>
                <div className="col-12">
                <center><label htmlFor="" className="form-label">Enter the Some Discreption:</label><textarea className="form-control" name="description" onChange={(e)=>{
                     setProducts({...products,[e.target.name]:e.target.value})
                     
                }}>this is an </textarea></center>
                </div>
                <div className="col-12"><center><button className="btn btn-success" onClick={send}>Submit</button></center></div>
               </div>
            </div>
        </>
    )
}
export default Add;