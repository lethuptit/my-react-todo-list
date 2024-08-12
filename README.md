# My React_ToDo_List App

This is a basic ToDo-List app built with Node, Express, Firebase, and React.

## How to Setup
To run this application locally, you must first have Node.js installed.

After downloading the code:

1. Using the command line, go into the application directory

2. Run `npm install` to install dependencies . 
- Run `npm start` to start the node server. You should see that the server is running locally on port 5000. This will keep the console busy. When finished, you will need to stop the server with CTRL + C.
3. 
4.  Make sure your server run on http://localhost:4000, change server URL to the.....
5. Open another command line, go into the application directory.
Run `npm run build` to build the React client application.
6. Run `npm run client` to run the application in the browser at [http://localhost:3000/] (as default)

## Functionality

![](ScreenShot.png)

Current features:

Add a new task to the ToDo list including name, description, due date, priority, category.
- View all the tasks on the list
- Mark a task complete
- Edit a task from the list
- Delete a task from the list
- Filter tasks by due date, comleted, active.
All of these actions will interact with the node server which is working on firebase realtimeDB.


## Notes

- This is a fairly basic application with minimal built-in error handling. More details are available from the server log and browser console on the command line.

- The React client uses Redux to manage state and Redux sagas are used to handle the Ajax communication with the server.
