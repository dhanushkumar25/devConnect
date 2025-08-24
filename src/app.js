const express = require("express");

const app = express();

// This will only handle GET call to /user
app.get("/abc",(req,res) => {
    res.send({ firstName : "Dhanush", lastName : "Kumar"});
})

app.listen(7777, ()  => {
    console.log("Server is successfully listening on port 7777...");
});