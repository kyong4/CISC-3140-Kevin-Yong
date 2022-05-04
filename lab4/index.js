var express = require('express');
var app = express();

var PORT = 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get("/",(req, res, next) => {
    res.json('Homepage for Lab 4 on localhost8000')
});

// Import SQLite3
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('carInfo.db');

app.use(express.json()); 

//ROUTES-API ENDPOINTS
//Root-Home
app.get('/lab4/', (req, res)=>{	
  res.send('Lab 4');
});

app.get('/lab4/cars/', (req, res)=>{
	res.send('Lasas');	
 // db.serialize(function(){
//	  db.all("SELECT * FROM cars;", function(err, table){
//		  res.json(table);
	//})
  //})
});

//Display Owners table from carInfo.db
app.get('lab4/owners/', (req, res)=>{	
  db.serialize(function(){
	  db.all("SELECT * FROM owners;", function(err, table){
		  res.json(table);
	})
  })
});
//Display Judges Table from carInfo.db
app.get('lab4/judges/', (req, res)=>{	
  db.serialize(function(){
	  db.all("SELECT * FROM judges;", function(err, table){
		  res.json(table);
	})
  })
});
//Display Scores Table from carInfo.db
app.get('lab4/scores/', (req, res)=>{	
  db.serialize(function(){
	  db.all("SELECT * FROM scores;", function(err, table){
		  res.json(table);
	})
  })
});

