const express = require("express");
const useRouter = require('./routes/router.js');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs');
app.use("/",useRouter);  

app.listen("3000", (err)=>{
    if(err){
        console.log("connection error");
    }else{
        console.log("server is listing at 3000");
    }
})
