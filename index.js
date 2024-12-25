const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const port = 3000

app.get('/', (req, res) => {
    res.json({
        'name': 'Deepak Sardana'
    })
})

app.post('/conservation', (req, res) => {
    console.log(req.body)
    console.log('Deepak ')
    console.log('Sardana ')
    res.send(req.body)


})

app.listen(port, () => {
    console.log('Example app listening on port ', port)
})