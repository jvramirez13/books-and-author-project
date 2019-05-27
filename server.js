const express = require("express");
const app = express();
const port = 9000;
var cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const API_KEY = process.env.REACT_APP_API_KEY;

app.use(cors());

app.get("/:title", (req, res) => {
  let uri = encodeURI(req.params.title);
  const fullURL =
    "https://www.googleapis.com/books/v1/volumes?q=intitle:" +
    uri +
    "&key=" +
    API_KEY;
  axios.get(fullURL).then(result => {
    res.send(result.data);
  });
});

/*
app.get('/getGeocode:address', (req,res) => {
    access google api with req.params.address
    axios.get(google api ulr).then(
        res.send(response from google)
    )
})
*/

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
