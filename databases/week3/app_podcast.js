const port = 8081;

const express = require("express");
const app = express();
const router = express.router();

//const bodyParser=re


app.use(express.json());
app.use("/api", router);

app.get("/", (req, res) => res.send("This is Marcel's podcast api"));
router.route("/users")
    .post((req, res) =>{
        sql.query("INSERT into ")
    } )


app.listen(port, () => console.log(`app is listening at ${port}`));