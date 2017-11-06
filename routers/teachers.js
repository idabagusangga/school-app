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
router.get('/add',(req,res) =>{
    res.render('teachersAdd')
})
router.post('/add',(req,res)=>{
    // console.log(req.body)
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    model.Teacher.create({
        first_name:first_name,
        last_name:last_name,
        email:email
    })
    .then(function(newTeacher){
        // console.log(newStudent)
        res.redirect('/teachers');
    }).catch((err)=>{
        // res.send(err.errors[0].message)
        res.render('teachersAdd',{error:err});
    });
});
router.get('/delete/:id',(req,res)=>{
    model.Teacher.destroy({
        where:{
            id:req.params.id
        }
    })
    .then(function(){
        res.redirect('/teachers');
    });
});
router.get('/edit/:id',(req,res)=>{
    model.Teacher.findById(req.params.id).then(teacher=>{
        model.Subject.findAll().then(function(subject){
            res.render('teachersEdit',{dataTeacher:teacher,dataSubject:subject})
        })
        
    })
})

module.exports = router;