const express = require('express');
const app = express();
const port = 5004;

const {addDate} = require('./midelware/date');
app.use (addDate);
// app.get ('/', (req, res) => {
//   res.send('Hello World');
// } );

// app.use('/static', express.static(__dirname + '/public'));
//

// route with middleware 
//app.get ('/with', addDate, (req, res) => { 
    //res.send('Hello World' + req.date);
    
 // }
 // );
  
  // route without middleware 
  //app.get ('/without', (req, res) => {
  //  res.send('Hello World' + req.date);
 // }
//)
  app.get ('/', (req,res) =>{
      res.sendFile(__dirname + '/public/home.html');
  });
  app.get ('/contact', (req,res) =>{
    res.sendFile(__dirname + '/public/contact.html');
});
app.get ('/About', (req,res) =>{
    res.sendFile(__dirname + '/public/About.html');
});



  app.listen(port, (err) => { 
    err ? console.log(err) : console.log(`Server is running on port ${port}`);
  });