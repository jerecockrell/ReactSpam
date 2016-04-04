var express = require('express');
var router = express.Router();
var Fish = require('../models/fish');

// api/fish
router.route('/')
  // GET ALL FISH FROM /api/fish
  .get(function(req, res){
  	Fish.find(function(err, fish){
  	  if(err){
  	  	res.status(500).send(err, 'Something broke!');
  	  } else {
  	  	res.json(fish);
  	  }
  	});
  })
  // POST FISH TO /api/fish
  .post(function(req, res){

  	// CREATE NEW FISH
  	var fish = new Fish({
  	  name: req.body.name,
      color: req.body.color,
      people_eater: req.body.people_eater,
      length: req.body.length,
      img: req.body.img,
  	})
    // SAVE FISH WITH NODE STYLE CALLBACK
    fish.save(function(err, fish){
      if(err){
        res.status(500).send(err, 'Something broke!');
      } else {
      	res.json(fish);
      }
    })
  });

// without one_fish, next router would conflict ...
router.route('/oneFish/:fish_id')
  // GET ONE FISH FROM /API/FISH/ID_NUMBER
  .get(function(req, res){
    Fish.findById(req.params.fish_id, function(err, fish){
      if(err){
      	res.status(500).send(err, 'Something has O\'broke!');//something
      } else {
      	res.json(fish);//something
      }
    })
  })
  .put(function(req, res){
    Fish.findById(req.params.fish_id, function(err, fish){
      if(err){
        //handle err
      } else {
        fish.name = req.body.name ? req.body.name : fish.name;
        fish.color = req.body.color ? req.body.color : fish.color;
        fish.length = req.body.length ? req.body.length : fish.length;
        fish.people_eater = req.body.people_eater ? req.body.people_eater : fish.people_eater;
        fish.img = req.body.img ? req.body.img : fish.img;
        
        fish.save(function(err){
          if(err){
            res.status(500).send(err, 'You ain\'t changed nothin');
          } else {
            res.json(fish)
          }
        })
      }
    })
  })
  .delete(function(req, res){
    Fish.remove({_id: req.params.fish_id}, function(err, fish){
      if(err) {
        res.status(500).send(err, 'Something been deleted')
      } else {
        res.json({message: 'Fish deleted'})
      }
    })
  });


// /api/fish/man_eater
router.route('/man_eater')
  .get(function(req, res){
    Fish.find({people_eater: true}, function(err, fish){
      if(err){
      	res.status(500).send(err, 'Something broke!');
      } else {
      	res.json(fish)
      }
    })
  });




  

module.exports = router;