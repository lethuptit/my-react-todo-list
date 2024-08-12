import { useState } from 'react'
import SideBarItem from './SidebarItem'

import { useDispatch } from 'react-redux';
import './Sidebar.scss'

const sidebarMap =
  [
    { 'title': "All Task", 'iconClass': "bi bi-card-list", 'filter': "SHOW_ALL" },
    { title: "Completed Tasks", iconClass: "bi bi-ui-checks", filter: "SHOW_COMPLETED" },
    { title: "Active Tasks", iconClass: "bi bi-hourglass-split", filter: "SHOW_ACTIVE" },
    { title: "Week-due Tasks", iconClass: "bi bi-building-check", filter: "SHOW_WEEK_DUE" },
    { title: "Over-due Tasks", iconClass: "bi bi-alarm", filter: "SHOW_OVER_DUE" },

  ];

const AppSidebar = () => {
  const [filter, setFilter] = useState('SHOW_ALL');
  const dispatch = useDispatch();

  const getItemClass = (item) => {
    if (item.filter === filter) {
      return "sidebar-item active";
    }
    return "sidebar-item";
  };

  const handleClick=(filter)=>{
    setFilter(filter);
    dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter
    })
  }

  return (
    <>
      <div className={"d-flex align-items-center gap-1 hover-style rounded py-1 px-2"}>
        <img src="assets/images/icons8-task-logo.png" alt="Logo" width="36" height="30" />
        <h5>ToDo List</h5>
      </div>

      <div className={"d-flex align-items-center justify-content-center hover-style rounded py-1"}>
        <img src="assets/images/todo-image.png" alt="Big Logo" width="230" height="230" />
      </div>
      <div className={"default-projects mt-5"}>
        <div className={"d-lex "}>
          <h5 id="1" className={'fw-bold pb-2'}> <i className={"bi bi-inbox h5"}></i> &nbsp;Summary</h5>
          <span className={"badge text-bg-secondary num-of-tasks"}></span>
        </div>
        <ul className="list-group">
          { sidebarMap.map((item) => 
            (<li key={item.filter} className={getItemClass(item)}  > 
                <SideBarItem onClick={handleClick}  item={item} /> 
              </li>)
            )}
        </ul>
      </div>
    </>
  )
}

export default AppSidebar
