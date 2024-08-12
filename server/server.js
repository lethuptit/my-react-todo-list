const express = require('express');
const app = express();

// Add middleware for handling CORS requests from index.html
const cors = require('cors');
app.use(cors());

const morgan = require('morgan')
// Logging
app.use(morgan('short'));


const bodyParser = require('body-parser');
app.use( bodyParser.urlencoded({extended: true}) );
app.use( bodyParser.json() );

//Static files
app.use(express.static('build'));

//Setup routers
const taskRouter = require('./modules/taskRouter');
app.use('/api/task', taskRouter);

const PORT = process.env.PORT || 5000;
app.listen( PORT, function() {
  //export sample data
  const trialTasksString = require('./data/defaultData')
  const filename = "sampleData.json"
  var myJsonString = JSON.stringify(trialTasksString);
  writeFileSync(filename, myJsonString);

  console.log(`Server is listening on port ${PORT}...`);
})