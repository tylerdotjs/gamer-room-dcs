const express = require('express');
const path = require('path')

const PORT = 8080;
const app = express();

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/secret', (req, res) => {
    res.send("<p>Nothing Secret Here</p>")
})

app.get('/colors', (req, res) => {
    res.redirect('https://coolors.co/eaeaea-004f2d-d87cac-2d3047')
})

app.use((req, res) => {
    res.send('<h1 style="text-align: center;">404, Not yet found</h1>');
})
app.listen(process.env.PORT || PORT, () => {
    console.log(`App listening at http://localhost:${process.env.PORT || PORT}`)
})