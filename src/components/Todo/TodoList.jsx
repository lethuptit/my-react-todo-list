import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getVisibleTasks } from '../../utils/utils'
import "./todo.scss"
import TaskItemView from './TodoItem'



function TaskListView({onGroupChange}) {

  const [tasks, setTasks] = useState([]);

  // Get tasks from Redux
  const dispatch = useDispatch();
  const taskList = useSelector((store) => store.taskList);
  const filter = useSelector((store) => store.showFilter);

  useEffect(() => {
    // Get the tasks from the server to display in table
    dispatch({ type: 'FETCH_TASK_LIST' });
  },
    [dispatch]
  );

  useEffect(() => {

    const [filterTilte, filterTasks] = getVisibleTasks(taskList, filter);
    setTasks(filterTasks);
    onGroupChange(filterTilte);

  }, [taskList, filter]);

  return (
    <>      
      <div className={'container d-flex '}>      
        {/* If there is some task, show list of tasks */}
        <ul className={'task-list list-group list-group-flush my-3'}>
          {tasks && tasks.map((t) =>
            (<li key={t.id} className={'list-group-item d-flex task'}> <TaskItemView task={t} /></li>)
          )}
        </ul>

         {/* Show no data */}
         {tasks&&tasks.length===0&&(<h4 className={'position-absolute top-50 start-50'}>There is no task.</h4> )}
      </div>
    </>
  )
}

export default TaskListView;
