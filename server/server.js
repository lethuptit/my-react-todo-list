const express = require('express');
const app = express();


// Add middleware for handling CORS requests from index.html
const cors = require('cors');
app.use(cors());

const morgan = require('morgan')
// Logging
if (!process.env.IS_TEST_ENV) {
  app.use(morgan('short'));
}


const bodyParser = require('body-parser');
app.use( bodyParser.urlencoded({extended: true}) );
app.use( bodyParser.json() );

//Static files
app.use(express.static('build'));

//Setup routers
// const taskRouter = require('./modules/task.router');
const taskRouter = require('./modules/taskRouter');
const categoryRouter = require('./modules/categoryRouter');
app.use('/api/task', taskRouter);
app.use('/api/category', categoryRouter);

const PORT = process.env.PORT || 5000;
app.listen( PORT, function() {
  console.log(`Server is listening on port ${PORT}...`);
})