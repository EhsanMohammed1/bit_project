


const express =require("express")
const cors =require("cors")

const products =require("./porducts.js")
const app =express();
const port= process.env.port || 5000;
app.use(express.json())
app.use(cors());



app.get("/",(req,res)=>{
  res.send("welcome to our first online shopping");
})
app.get("/products",(req,res)=>{
  res.send(products);
})
  
app.listen(port,console.log(`our backend listen on port ${port}`))