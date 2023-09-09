const express = require('express');
const app = express();
const PORT = 3000;
const data = require("./data");
app.use(express.json())

app.delete('/v1/api/deleteData/:id', (req, res) => {

    const id = req.params.id;
    const name = req.body;
    const personData = data.person.filter(
        (x) => x.id != Number(id));

    console.log("Testdata", personData);

    res.send({ message: "Request completed successfully", data: personData })
})
app.listen(PORT, () => {
    `Listening to port {PORT}`
})