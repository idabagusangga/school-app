const express = require('express')

const router = express.Router()

// const path = require('path');
// const path_model = path.resolve(__dirname, '../models')
// const model = require(path_model)

const model = require('../models')
// console.log("----------",model)

router.get('/',(req,res)=>{
    
    model.Teacher.findAll().then((dataTeacher) =>{
        res.render('teachers',{dataTeachers:dataTeacher})
    })
});

module.exports = router;