const express=require("express");
const data=require('./products.json')
const app=express();
const fs=require('fs')
const cors=require("cors");
app.use(express.json())


app.use(cors({
    origin: "*",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
}));
 
app.listen(3400,()=>{
    console.log("app is running at port 3400")
})
app.post('/Add',(req,res)=>{
    data.push(req.body);
    console.log()
    fs.writeFile('./products.json',JSON.stringify(data,null,2),(err,data)=>{
        return res.send("Data added")
    })
})
app.get('/product',(req,res)=>{
   return res.json(data)
 
})
app.get('/delete', (req, res) => {
    console.log(data);
    res.json(data);
});
app.get('/update',(req,res)=>{
    res.json(data)
    var a= res.json(data)
    console.log(a)
})
app.patch('/view',(req,res)=>{
    var product=req.body.product;
    console.log(product)
    var qty=req.body.qty
    var id=product.id
    var process=product.stocks-qty
    var index=data.findIndex((pro)=>pro.id==id)
    
    data.splice(index,1,{...product,stocks:process})
    fs.writeFile('./products.json',JSON.stringify(data,null,2),()=>{
        res.json(Number(process))
    })
    console.log("Stocks: "+product.stocks)
    console.log("process: "+process)
    console.log("index: "+index)
    
})
app.patch('/update',(req,res)=>{
    var product=req.body.pro;
    console.log(product)
    var qty=req.body.qty
    var id=product.id
    var process=product.stocks+qty
    var index=data.findIndex((pro)=>pro.id==id)
    
    data.splice(index,1,{...product,stocks:process})
    fs.writeFile('./products.json',JSON.stringify(data,null,2),()=>{
        res.json(process)
    })
    console.log("Stocks: "+product.stocks)
    console.log("process: "+process)
    console.log("index: "+index)
    
})
app.delete('/delete/:id', (req, res) => {
    const idToDelete = Number(req.params.id);
    
    // Remove the item from the in-memory array
    const updatedData = data.filter(item => item.id !== idToDelete);

    // Update the in-memory data array
    data.length = 0; // Clear existing array
    data.push(...updatedData); // Refill with updated data

    // Write updated data to the file
    fs.writeFile('./products.json', JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.error("Error writing to file:", err);
            return res.status(500).json({ error: "Failed to delete item" });
        }
        res.json(data);
    });
});

