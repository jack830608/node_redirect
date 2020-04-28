const express = require('express');
const app = express();



const port = process.env.PORT || 6000
app.get('/', (req, res) => {
    res.status(301).redirect("https://www.jack1in.blog")
})
app.listen(port, (err) => {
    if (err) throw err
    console.log(`Server is listening on ${port}`)
})