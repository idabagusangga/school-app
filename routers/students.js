const express = require('express')

const router = express.Router()

// const path = require('path');
// const path_model = path.resolve(__dirname, '../models')
// const model = require(path_model)

const model = require('../models')
// console.log("----------",model)

router.get('/',(req,res)=>{
    
    model.Student.findAll().then((dataStudents) =>{
        res.render('students',{dataStudents:dataStudents})
    })
});
router.get('/add',(req,res) =>{
    res.render('studentsAdd')
})
router.post('/add',(req,res)=>{
    // console.log(req.body)
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    model.Student.create({
        first_name:first_name,
        last_name:last_name,
        email:email
    })
    .then(function(newStudent){
        // console.log(newStudent)
        res.redirect('/students');
    }).catch((err)=>{
        // res.send(err.errors[0].message)
        res.render('studentsAdd',{error:err});
    });
});
router.get('/delete/:id',(req,res)=>{
    model.Student.destroy({
        where:{
            id:req.params.id
        }
    })
    .then(function(){
        res.redirect('/students');
    });
});
router.get('/edit/:id',(req,res)=>{
    model.Student.findById(req.params.id).then(student=>{
        res.render('studentsEdit',{dataStudent:student})
    })
})

module.exports = router;