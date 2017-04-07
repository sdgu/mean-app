const express = require("express");
const router = express.Router();


const pokedex = require("./../data/pokedex.js");

     // nihilego: 
     //  { num: 793,
     //    species: 'Nihilego',
     //    types: [Object],
     //    gender: 'N',
     //    baseStats: [Object],
     //    abilities: [Object],
     //    heightm: 1.2,
     //    weightkg: 55.5,
     //    color: 'White',
     //    eggGroups: [Object] },

const heroes = 
     [{
          id: 69421,
          name: "Pastaman"
          
     },
     {
          id: 420,
          name: "Schweed Guy"
     },
     {id: 11, name: 'Mr. Nice'},
     {id: 12, name: 'Narco'},
     {id: 13, name: 'Bombasto'},
     {id: 14, name: 'Celeritas'}]

router.get("/pokedex", (req, res) =>
{
	res.json(heroes);
});




router.get("/pokedex/:id", (req, res) =>
{
     // console.log(req.params.id);

     for (var i = 0; i < heroes.length; i++)
     {
          hero = heroes[i];
          // console.log(hero.id);
          if (hero.id == req.params.id)
          {
               // console.log("o.o");
               res.json(hero);
          }
     }

     // console.log(heroes.find(hero => hero.id === req.params.id));
})

module.exports = router;