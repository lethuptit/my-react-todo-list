import './App.scss';
import AddTask from '../Todo/AddTodo';
import Sidebar from '../Sidebar/Sidebar'
import TaskListView from '../Todo/TaskListView';


function App() {
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
          <div className={'d-flex justify-content-between align-items-center'}>
            <h2>My Tasks</h2>
            <AddTask />
          </div>
          <TaskListView />
        </section>
        <footer className={'container pt-2 border-top'}>
          <p className={'mx-auto text-center'}>© <span>Copyright</span> <strong>📝 Thu Le </strong> <span> © 2024 </span></p>
        </footer >

        
      </div>
    </main>
  );
}

export default App;
