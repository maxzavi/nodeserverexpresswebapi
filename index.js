const express = require('express')

const app=express()

//routes
app.use(require('./routes/index'))
app.use('/song/api/v1',require('./routes/song'))

app.listen(3000,function(){
    console.log('Server ready')
})
