const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1 style='color:red'>Home page</h1>");
});

router.get("/books", (req, res)=>{
    res.send("Books");
})

router.get("/about", (req, res)=>{
    res.send("About");
})

module.exports = router;
