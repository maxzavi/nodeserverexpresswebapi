const { Router} = require('express')

const router = Router();

router.get("/",function(req,res){
    const song={
        "name":"Tusa",
        "singer":"Carol G"
    }
    res.json(song);
})

module.exports=router