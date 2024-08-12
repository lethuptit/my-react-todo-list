# My React_ToDo_List App

This is a basic ToDo-List app built with Node, Express, Firebase, and React.

## How to Setup
To run this application locally, you must first have Node.js installed.

After downloading/or cloning the code from github link 'https://github.com/lethuptit/my-react-todo-list.git':

1. Using the command line, go into the application directory

2. Run `npm install` to install dependencies . 

3. Run `npm start` to start the node server. You should see that the server is running locally on port 5000. This will keep the console busy. When finished, you will need to    stop the server with CTRL + C.

4.  Creat an .env file under the application directory and adding : REACT_APP_SERVER_URL=http://localhost:5000
    Make sure your server is running on http://localhost:5000 

5. Open another command line, go into the application directory.

6. Run `npm run build` to build the React client application.

7. Or run `npm run client` to run the application in the browser at [http://localhost:3000/] (as default)


## Sample Data

The app is using my Firebase Realtime DB. In case you want to change to you DB, let change the config string at 'server/modules/FirebaseConfig.js'.
There is a sample data at 'src/data/default-task.json' to import for testing.

## Functionality

Current features:

Add a new task to the ToDo list including name, description, due date, priority, category.
- View all the tasks on the list
- Mark a task complete
- Edit any task's information from the list
- Delete a task from the list
- Filter tasks by due date, comleted, active status.
All of these actions will interact with the node server which is working on firebase realtimeDB.

Future features:

- Sort the tasks
- Error handling
- Improve UI/UX : loading screen when fetching data, showing error in an apprpreate place.
- Improve performance.


## Notes

- This is a fairly basic application with minimal built-in error handling. More details are available from the server log on the command line and browser console log.

- The React client uses Redux to manage state and Redux sagas to handle the Ajax communication with the server.
