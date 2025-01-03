const express=require("express")
const router=express.Router()
const steacher=require('../Controller/readteach')
const st=require('../Controller/readfile')
router.get('/getdata',function(req,res){
    res.send({"status":200,
        "message":std.list
     });
})
   
router.get('/getteacherdata',steacher.readteacherfile)
router.post('/addteacher',steacher.insertteacher)
   
router.post('/insertdata',(req,res)=>{
     res.send({
       status:200,
       message:req.body.name,
       other:req.query
     })
   })
   router.put('/updatedata',steacher.updateteacher)
   
   router.delete('/deleteteacherdata',steacher.deleteteacher)

   module.exports=router
   
