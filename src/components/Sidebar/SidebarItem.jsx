import React, { useState } from 'react'

const SideBarItem = ({className, item, onClick , children}) => {

  const handleClick = (e) => {
    onClick(item.filter);
  }

  return (
    <div className={"d-flex"} onClick={handleClick} >
      <i className={item.iconClass}></i>
      <p id="2">{item.title}</p>
      <span className={"badge text-bg-secondary num-of-tasks"}></span>
      {children}
    </div>
  )
};

export default SideBarItem;
