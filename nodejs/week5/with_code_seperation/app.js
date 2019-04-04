const express = require("express");
const app = express();


const port = 8080;

app.use(express.json());

const studentRouter = require("./studentsRouting.js");
//let studentRouter = router.router;


app.get("/", (req, res) => res.send("Marcel HYF APP"));




app.use('/api', studentRouter);

app.listen(port, () => console.log(`Marcel HYF app is listening on port ${port}!`));