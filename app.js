const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = required('body-parser');
const path = require('path');
const db = require('./config/database');
db.autheticate()
     .then(()=>console.log('Dtabase connected...'))
     .catch(err=>console.log('Error: '+err))
const app = express();
app.get('/',(req,res)=>res.send('INDEX'));
//Gig Routes
app.use('/gigs',require('./routes/gigs'));
const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log(`Server started on port ${PORT}`));
