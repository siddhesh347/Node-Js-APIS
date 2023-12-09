const express = require("express");
const PORT = 5000;
const EventEmitter = require("events");

const event = new EventEmitter();
const app = express();

let count=0;
event.on("countAPI",()=>{
    count++;
    console.log("Event has called "+count +" times")
})

app.get("/search", (req, res) => {
    res.send("Search api is called")
    event.emit("countAPI")
})

app.get("/records", (req, res) => {
    res.send("record api is called")
    event.emit("countAPI")
})
app.get("/findRecords", (req, res) => {
    res.send("find api is called")
    event.emit("countAPI")
})
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})