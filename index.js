const express=require('express')
const cors=require('cors')
const indexRouter=require('./Router/index')
const app = express()
app.use(cors())
app.use(express.json())
app.use("/",indexRouter)
app.listen(3001,()=>{
  console.log("Server running on port 3001");
})