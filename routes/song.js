const { Router} = require('express')

const router = Router();
const songs = require('../db/songs.json')
var mid = songs.length;
router.get("/",function(req,res){
    res.json(songs)
})

router.post("/",function(req,res){
    const {name,singer,year,genre} = req.body;
    if(name&&singer&&year&&genre){
        mid = mid+1;
        const id=mid;
        const song={id, ...req.body}
        songs.push(song);
        res.json(song)
    }else{
        res.status(500).end('Error in request')
    }
})

router.get("/:id",function(req,res){
    const {id} = req.params
    if (id>mid || id<1){
        res.status(404).end('Song not found!!')
    }else{
        songs.forEach(function(song,i){
            if(song.id==id){
                return res.json(song)                
            }
        })
        res.status(404).end('Song not found!!')
    }
})

router.delete('/:id',function(req, res){
    const { id } = req.params
    if (id>mid || id<1){
        res.status(404).end('Song not found!!')
    }else{
        songs.forEach(function(song,i){
            if(song.id==id){
                songs.splice(i,1)
                res.end('Song deleted!!!')                                
            }
            res.status(404).end('Song not found!!')
        })
    }
})
module.exports=router