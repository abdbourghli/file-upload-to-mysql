const express = require('express'),
fs = require('fs'),
db = require("./scripts/db"),
path = require('path'),
bodyParser=require("body-parser"),
fileUpload = require('express-fileupload')


const PORT = process.env.PORT || 5000;


const server  = express()
    .use(express.static(path.join(__dirname + "/views")))
    .use(bodyParser.urlencoded({extended: true}))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(fileUpload())
    .post('/upload',(req,res)=>{
        console.log(req.files.file.name)
        db.storeImg(req.files.file)
        res.send('ack')
     })
// const xx = fs.readFileSync('./123.png')
// console.log(xx)
// db.storeImg(xx)

// db.connect()

server.listen(PORT)