const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://@cluster0.9ekt417.mongodb.net/')
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
})
const CourseSchema = new mongoose.Schema({
    title: String,
    price: 5999
})
const User = mongoose.model('Users', { name: String, email: String, password: String })
const user = new User({
    name: 'Deepak Sardana',
    email: 'DeepakSardana03@gmail.com',
    password: '123'
})

user.save()