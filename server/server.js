const express = require('express');
const app = express();

// Add middleware for handling CORS requests
const cors = require('cors');
app.use(cors());

// Adding middleware for logging
const morgan = require('morgan')
app.use(morgan('short'));

// Adding middleware for parsing request
const bodyParser = require('body-parser');
app.use( bodyParser.urlencoded({extended: true}) );
app.use( bodyParser.json() );

//Static files
app.use(express.static('build'));

//Setup routers
const taskRouter = require('./modules/taskRouter');
app.use('/api/todos', taskRouter);

const PORT = process.env.PORT || 5000;
app.listen( PORT, function() {
    console.log(`Server is listening on port ${PORT}...`);
})