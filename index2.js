// const express = require('express')
// const zod = require('zod')
// const app = express()

// const schema = zod.array(zod.number())

// app.use(express.json())

// app.post('/health-check', (req, res) => {
//     const kidneys = req.body.kidneys
//     const response = schema.safeParse(kidneys)
//     res.send({
//         response
//     })
// })

// app.post('/login', (req, res) => {

// })

// app.listen(3000)
var subsets = function (nums) {
    let finalAns = []

    const helper = (num, index, combinationsFormedSoFar) => {
        if (index == num.length) {
            console.log([...combinationsFormedSoFar])
            finalAns.push([...combinationsFormedSoFar])
            return
        }

        //do not include current element
        helper(num, index + 1, combinationsFormedSoFar)

        combinationsFormedSoFar.push(num[index])
        helper(num, index + 1, combinationsFormedSoFar)
        combinationsFormedSoFar.pop()
    }

    helper(nums, 0, [])
    return finalAns

};

console.log(subsets([1, 2, 3]))