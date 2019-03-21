var orm = require("../config/orm.js");
var express = require('express');
var router = express.Router();
var burger = require("../models/burgers.js")

// var burger = {
//     all
// }
router.get("/", function(req, res){
   burger.all(function(burger_data){
       console.log(burger_data);
    res.render("index", {burger_data})
   })
 
})

router.post("/burgers/update",function(req,res){
   console.log(req.body.burger_id);
   burger.update(req.body.burger_id, function(result){
      console.log(result);
      res.redirect("/");
   });
});

router.post("/burgers/create", function(req, res){
   burger.create(req.body.burger_name, function(result){
      res.redirect("/");
   })
})

module.exports = router;