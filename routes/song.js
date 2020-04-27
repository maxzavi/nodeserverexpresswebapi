const { Router} = require('express')

const router = Router();
const songs = require('../db/songs.json')

router.get("/",function(req,res){
    res.json(songs)
})

module.exports=router