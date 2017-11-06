const express = require('express')
const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//teacher
const teacher = require('./routers/teachers')
app.use('/teachers',teacher)
// //app.use(app.router);
// routes.initialize(routeTeacher);

//subject
const subject = require('./routers/subjects')
app.use('/subjects',subject)

//students
const student = require('./routers/students')
app.use('/students',student)

app.listen(3000,()=>{
    console.log("==================CONNECTED====================")
})