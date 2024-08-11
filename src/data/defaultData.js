import { format, add } from "date-fns"


export const trialTasksString = {
  "87e1c391-1f35-414c-9567-2efd608079a6":{
      "name": "Trial Task",
      "description": "This is a trial task that should have today's date. It will be assigned a medium priority, and have no project,",
      "due": `${format(Date.now(),"yyyy-MM-dd")}`,
      "priority": "low",
      "id": "87e1c391-1f35-414c-9567-2efd608079a6",
      "status": true,
      "category": "Home" 
    },
    "ff5dbf6b-8e8c-43ea-b4dd-5eba29b74c84":{
      "name": "I'm a task in a project!",
      "description": "Hey there! If you're looking at this item description, you'll see that I've been assigned to a project.",
      "due": `${format(Date.now(),"yyyy-MM-dd")}`,
      "priority": "task-critical",
      "id": "ff5dbf6b-8e8c-43ea-b4dd-5eba29b74c84",
      "status": false,
      "category": "Work"
    },
    "8a69b719-b35a-4dbe-9638-84996a4df49a":{
      "name": 'Set Up Development Environment',
      "description": 'Install Node.js, npm, and necessary development tools.',
      "due": `${format(Date.now(),"yyyy-MM-dd")}`,
      "priority": "critical",
      "id": "8a69b719-b35a-4dbe-9638-84996a4df49a",
      "status": false,
      "category": "Home"
    },
    "5991e495-729f-4637-b64f-71d40192f861":{
      name: 'Implement Authentication',
      description: 'Develop and integrate user authentication using JWT.',
      "due": `${format(Date.now(),"yyyy-MM-dd")}`,
      "priority": "low",
      "id": "5991e495-729f-4637-b64f-71d40192f861",
      "status": false,
       "category": "Home"
    },
    "cd5604a1-59f4-41e2-9c49-ff88b9a578bb":{
      "name": "Buy a new Laptop!",
      "description": "I've lost a critical task somewhere. Help me!",
      "due": `${format(add(Date.now(), {days: 3}), "yyyy-MM-dd")}`,
      "priority": "critical",
      "id": "cd5604a1-59f4-41e2-9c49-ff88b9a578bb",
      "status": false,
       "category": "Home"
    },
    "jkjkhuk-59f4-41e2-9c49-ff88b9a578bb":{
      name: 'Design Database Schema',
      description: 'Create the database schema and set up initial tables.',
        "due": `${format(add(Date.now(), {days: 4}), "yyyy-MM-dd")}`,
        "priority": "medium",
        "id": "jkjkhuk-59f4-41e2-9c49-ff88b9a578bb",
        "status": true,
        "category": ""
      },
    "afwafwaf-59f4-41e2-9c49-ff88b9a578bb":{
      name: 'Build REST API',
      description: 'Develop REST API endpoints for CRUD operations.',
        "due": `${format(add(Date.now(), {days: 5}), "yyyy-MM-dd")}`,
        "priority": "low",
        "id": "afwafwaf-59f4-41e2-9c49-ff88b9a578bb",
        "status": true,
        "category": ""
      }
    
  };

  //var myJsonString = JSON.stringify(trialTasksString);
  //console.log(myJsonString)

const trialTasks = trialTasksString;
console.log(trialTasks)


export { trialTasks }