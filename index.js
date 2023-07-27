const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 8080;

const conf = express.static(path.resolve("./public"));
app.use(conf);
app.use(express.json());
app.set("json spaces",1);

app.listen(port,() => {
  console.log("Website berjalan di http://localhost:"+port);
});

app.get("/", async(req,res) => {
  fs.readFile("./public/index.html",(err,data) => {
    if(err) return res.json({mess : 'error code 404'});
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write(data);
    res.end();
  });
});

app.get("/home", async(req,res) => {
  fs.readFile("./public/home.html",(err,data) => {
    if(err) return res.json({mess : 'error code 404'});
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write(data);
    res.end();
  });
});