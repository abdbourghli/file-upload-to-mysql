const mysql = require('mysql')


// temp login of local db
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "testdb"
  });

  exports.storeImg = img =>{
    var query = con.query('INSERT  INTO images (type,name, data) VALUES (?,?,?)',[img.mimetype,img.name,img.data], function(err,
        result) {
        console.log(err);
        console.log(result);
        })
  }
  exports.connect = ()=>{con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!")
});}