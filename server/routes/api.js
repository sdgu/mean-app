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
		
	}]
	res.send({heroes});
});

module.exports = router;