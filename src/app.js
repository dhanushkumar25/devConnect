const express = require("express");

const app = express();

// This will only handle GET call to /user
app.get("/user",(req,res) => {
    res.send({ firstName : "Dhanush", lastName : "Kumar"});
})

app.post("/user",(req,res) => {
    // saving data to DB
    res.send("Data successfully saved to the database!");
})

app.delete("/user",(req,res) => {
    res.send("Data deleted successfully");
})




app.use("/test",(req,res) => {
    res.send("Hello from the server!");
})

app.listen(7777, ()  => {
    console.log("Server is successfully listening on port 7777...");
});