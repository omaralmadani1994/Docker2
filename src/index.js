const express =require('express');

const app = express();

const port = 4000;


app.get('/',(req,res)=> {

    res.send('<h1> HEllo Roaa!!w!!  prod here</h1>')
});


app.listen(port,()=>{

    console.log(`App is Running at port : ${port}`)
});