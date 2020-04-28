const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');


app.use(morgan('dev'));
const port = process.env.PORT || 7000
app.use(express.static(path.join(__dirname, 'public')));
app.get('/',(req,res) => {
    res.redirect(301,'https://www.jack1in.blog')
})
app.listen(port, (err) => {
    if (err) throw err
    console.log(`Server is listening on ${port}`)
})