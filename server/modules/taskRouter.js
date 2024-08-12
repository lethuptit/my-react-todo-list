const express = require('express');
const router = express.Router();
const db = require('./FirebaseConfig')

const { ref, child, get, set, push, update, remove } = require("firebase/database");
const dbRef = ref(db, "todos/tasks");

// Get all tasks
router.get('/', (req, res) => {
  get(dbRef).then((snapshot) => {
    if (snapshot.exists()) {
      var tasks = Object.values(snapshot.val());
      res.send(tasks)
    } else {
      console.log("No data available");
      res.send()
    }
  }).catch((error) => {
    console.log("Error getting all tasks data", error)
    res.sendStatus(500);
  });

});

// Get a specific task by id
router.get('/:id', (req, res) => {
  const taskId = req.params.id;
  console.log('Getting task with id', taskId);

  dbRef.get(`tasks/${taskId}`).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      res.send(snapshot.val());
    } else {
      res.send();
    }
  }).catch((error) => {
    console.error(`Error getting task with id ${taskId}:`, error);
    res.sendStatus(500);
  });
});

// Add task
router.post('/', (req, res) => {
  const task = req.body;
  console.log('Adding task', task);

  // Check for required values - description & category
  if (task.name == null) {
    res.sendStatus(400);
    console.log('Error adding task, name is required.');
    return;
  }

  if (task.due == null) {
    res.sendStatus(400);
    console.log('Error adding task, due date is required.');
    return;
  }

  // Get a key for a new Post.
  const newKey = push(dbRef).key;
  task.id=newKey;
  
  set(child(dbRef,`/${newKey}`),task)
    .then(() => {
      res.status(201).send(newKey);
    }).catch((error) => {
      console.log("Error in adding new task", error)
      res.sendStatus(500);
    });

});

// Delete a task
router.delete('/:id', (req, res) => {
  const taskId = req.params.id;

  remove(child(dbRef,`/${taskId}`))
  .then(() => {
      res.send(taskId);
    }
  ).catch((error) => {
    console.error(`Error deleting task with id ${taskId}:`, error);
    res.sendStatus(500);
  });

});

// Update a task
router.put('/:id', (req, res) => {
  const newTask = req.body;
  const taskId = req.params.id;

  update(child(dbRef,`/${taskId}`), {...newTask })
  .then(() => {
    // Data saved successfully!
    res.sendStatus(200);
  })
  .catch((error) => {
    // The write failed...
    console.log('Error updating task: ', error);
      res.sendStatus(500);
  });
  
});


module.exports = router;