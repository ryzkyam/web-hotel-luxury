
import express from 'express'
const app = express()
const PORT = 8000
app.get("/API", (req,res)=>{
  res.send("hit me api ");
})


app.get("/dataMhs", (req, res)=>{
  req.send()
  const data = proses.env.datamhs
  res.send()
})

app.listen(PORT, (err)=>{
  if(err){
    console.log("error to listen port")
  }else{
    console.log(
      `server conect in http://localhost:${PORT}`
    );
    
  }
})