const express = require('express')

const app=express()
//midleware
app.use(express.json());

//routes
app.use(require('./routes/index'))
app.use('/song/api/v1',require('./routes/song'))
app.use('/user/api/v1',require('./routes/users'))


app.listen(3000,function(){
    console.log('Server ready')
})
