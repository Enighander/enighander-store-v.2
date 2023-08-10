const express = require("express");
const cors = require("cors");

const app = express();

let corsOption = {
    origin: "http://localhost:8000"
};

app.use(cors(corsOption));

app.use(express.json());

app.get("/", (req,res) => {
    res.json({message: "this is simple route"});
});


const PORT = process.env.PORT || 8000;

require("./app/routes/product.routes.js")(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
