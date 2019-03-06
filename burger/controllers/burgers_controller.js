var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function() {
    res.redirect("/");var express = require("express");

    var router = express.Router();
    
    var burgers = require("../models/burger.js");
    
    router.get("/", function(req,res){
      res.redirect("burgers")
    });
    
    router.get("/burgers", function(req,res){
      burgers.selectAll(function(data){
        var hbsObject = {
          burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
      });
    });
    
    router.post("/burgers/create", function(req,res){
      burgers.insertOne([
        "burger_name"
        ],[
          req.body.burger_name
          ], function(data){
            res.redirect("/burgers");
          });
    });
    
    router.put("/burgers/update/:id", function(req,res){
      var condition = "id = " + req.params.id;
      console.log("condition", condition);
    
      burgers.updateOne({
        "devoured": req.body.devoured
      }, condition, function(data){
        res.redirect("/burgers")
      });
    });
    
    module.exports = router;
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    res.redirect("/");
  });
});

module.exports = router;