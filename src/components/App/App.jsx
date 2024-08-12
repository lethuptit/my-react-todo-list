import './App.scss';
import AddTask from '../Todo/AddTodo';
import Sidebar from '../Sidebar/Sidebar'
import TaskListView from '../Todo/TodoList';
import { useState } from 'react';


function App() {
  const [taskGroup, setTaskGroup] = useState("All Tasks")

  return (
    <main className={"d-flex min-vh-100"}>
      <div className={"sidebar px-3 py-2 bg-light position-fixed bottom-0 top-0 start-0 overflow-y-auto overflow-x-hidden"}>
        <Sidebar />
      </div>
      <div className={"main-contents flex-grow-1 px-1 px-md-1"}>
        <header>
          <h1>My ToDo List</h1>
        </header>
        <section className={'main-section'}>
          <div className={'d-flex mx-2 justify-content-between align-items-center'}>
            <h2 >{taskGroup}</h2>
            <AddTask/>
          </div>
          <TaskListView onGroupChange={setTaskGroup}/>
        </section>
        <footer className={'container pt-2 border-top'}>
          <p className={'mx-auto text-center'}>© <span>Copyright</span> <strong>📝 Thu Le </strong> <span> © 2024 </span></p>
        </footer >

        
      </div>
    </main>
  );
}

export default App;
