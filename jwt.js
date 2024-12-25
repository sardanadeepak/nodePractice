const express = require('express')
const jwt = require('jsonwebtoken');
const jwtPassword = '123456'
const app = express()
app.use(express.json())
const ALL_USERS = [
    {
        username: 'deepaksardana03@gmail.com',
        password: '123',
        name: 'Deepak 3'
    },
    {
        username: 'deepaksardana04@gmail.com',
        password: '1234',
        name: 'Deepak 4'
    },
    {
        username: 'deepaksardana05@gmail.com',
        password: '12345',
        name: 'Deepak 5'
    },
    {
        username: 'deepaksardana@gmail.com',
        password: '12',
        name: 'Deepak 12'
    },
]

function userExist(username, password) {

    let userExist = false;

    ALL_USERS.forEach((item) => {
        if (item.username == username && item.password == password) {
            userExist = true
        }
    })

    return userExist

}

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password
    if (!userExist(username, password)) {
        return res.status(403).json({
            msg: 'User Doesnt exist in our memory DB'
        })
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    })

})

app.get('/users', (req, res) => {
    const token = req.headers.authorization
    try {
        const decode = jwt.verify(token, jwtPassword)
        const username = decode.username
        res.send({
            users: ALL_USERS.filter((item) => {
                return item.username != username
            })
        })
    }
    catch (err) {
        return res.status(403).json({
            msg: 'Invslid token'
        })
    }
})

app.listen(3000)