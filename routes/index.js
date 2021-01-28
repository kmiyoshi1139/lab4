
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render("index", {
  	"projects": [
  		{ "name": "Waiting in Line", 
  	 	  "image": "lorempixel.people.1.jpeg",
  	 	  "id": "project1"
  		},
		{ "name": "Needfinding",
  		  "image": "lorempixel.city.1.jpeg",
  	 	  "id": "project2"
  		},
  		{ "name": "Protoyping",
  		  "image": "lorempixel.abstract.8.jpeg",
  	 	  "id": "project2"
  		},
  		{ "name": "Heuristic Evaluation",
  		  "image": "lorempixel.people.2.jpeg",
  	 	  "id": "project2"
  		},
  	] 
  });
};