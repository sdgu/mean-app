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



router.get("/pokedex", (req, res) =>
{
	let heroes = 
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
	res.json(heroes);
});

module.exports = router;