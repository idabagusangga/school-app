const express = require('express')

const router = express.Router()

// const path = require('path');
// const path_model = path.resolve(__dirname, '../models')
// const model = require(path_model)

const model = require('../models')
// console.log("----------",model)

router.get('/',(req,res)=>{
    
    model.Subject.findAll({include:[model.Teacher]}).then((dataSubjects) =>{
        res.render('subjects',{dataSubjects:dataSubjects})
    })
});

module.exports = router;