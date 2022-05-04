var express = require('express');
var app = express();

var PORT = 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get("/",(req, res, next) => {
    res.json('Homepage for Lab 4 on localhost8000')
});

// Imports SQLite3
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('carInfo.db');

app.use(express.json()); 

app.get('/lab4/', (req, res)=>{	
  res.send('Lab 4');
});

//Display Cars
app.get('/lab4/cars/', (req, res)=>{

 db.serialize(()=>{
  db.all("SELECT * FROM cars;", (err, table)=>{
		  res.json('table');
	})
  })
});

//Display Owners
app.get('/lab4/owners/', (req, res)=>{	
  db.serialize(()=>{
	  db.all("SELECT * FROM owners;", (err, table)=>{
		  res.json(table);
	})
  })
});
//Display Judges  
app.get('/lab4/judges/', (req, res)=>{	
  db.serialize(()=>{
	  db.all("SELECT * FROM judges;", (err, table)=>{
		  res.json(table);
	})
  })
});
//Display Scores
app.get('/lab4/scores/', (req, res)=>{	
  db.serialize(()=>{
	  db.all("SELECT * FROM scores;", (err, table)=>{
		  res.json(table);
	})
  })
});

