import React, { useState, useEffect } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import './todo.scss'
import catagoryList from '../../data/categoryData';


function TaskDetailsForm({ taskItem, onSubmitForm, onCloseForm }) {
    const [task, setTask] = useState(taskItem);
    const [isShow, setIsShow] = useState(true)
    // const [appStatus, setAppStatus] = useState(useSelector(state => state.infoApp))
    // const dispatch = useDispatch();

    // useEffect(()=>{
    //     // If action is successful, close the form
    //     if (appStatus.length === 0 || appStatus === '') {
    //         handleClose();
    //     }
    // }, [appStatus])


    const handleClose = () => {
        //Set app status  back to normal
        // dispatch({
        //     type: 'SET_APP_STATUS',
        //     payload:''
        //   })
        if(onCloseForm)
            onCloseForm()
        
        setIsShow(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const addTaskForm = document.querySelector('.add-task-form')

        if (addTaskForm.checkValidity()) {
            // dispatch({ type: 'SET_APP_STATUS', payload: 'Requesting' });
            // setTimeout(()=>onSubmitForm(task),1500)
            onSubmitForm(task);
            handleClose();
           
        } else {
            event.stopPropagation()
            addTaskForm.classList.add('was-validated')
        }
    }

    return (
        <>
            <Modal className={'modal'} show={isShow} onHide={handleClose} backdrop="static" centered={true} keyboard={false}>
                <Modal.Header className={'modal-header'} closeButton>
                    <Modal.Title>New Task
                        {/* Show spinner  */}
                        {/* {appStatus==='Requesting'&&<div class="spinner-border text-secondary" role="status">
                            <span className={"visually-hidden"}>Loading...</span>
                        </div>} */}
                    </Modal.Title>
                    
                </Modal.Header>
                <Modal.Body>
                    {/* {appStatus&&<div>   <p style={{ color: "red" }}>{appStatus}</p>       </div>} */}
                    <form noValidate className={"add-task-form "} id='task-form'>
                        <div className={"form-floating mb-3"}>
                            <input
                                type="text"
                                className={"form-control"}
                                id="task-name"
                                value={task.name}
                                placeholder="Finish this project"
                                onChange={(event) => setTask({ ...task, name: event.target.value })}
                                required
                            />
                            <label htmlFor="task-name">Task name</label>
                            <div className={"invalid-feedback"}>Please enter task name</div>

                        </div>
                        <div className={"form-floating mb-3"}>
                            <textarea
                                id="description"
                                className={"form-control"}
                                value={task.description}
                                onChange={(event) => setTask({ ...task, description: event.target.value })}
                                placeholder="You'll need to apply self-discipline and excellence to be able to get it done"
                            // style="height: 150px"
                            ></textarea>
                            <label htmlFor="description">Description</label>
                        </div>
                        <div className="row mb-3">
                            <div className={"col"}>
                                <label className={"form-label"} htmlFor="due-date">Due date</label>
                                <input
                                    id="due-date"
                                    type="date"  
                                    className={"form-control"}
                                    aria-label="Due date"
                                    value={task.due}
                                    onChange={(event) => setTask({ ...task, due: event.target.value })}
                                    required
                                />
                                <div className={"invalid-feedback"}>Please enter a valid date</div>
                            </div>
                            <div className="col">
                                <label className={"form-label"} htmlFor="priority">Priority</label>
                                <select
                                    className={"form-select"}
                                    aria-label="Select priority"
                                    id="priority"
                                    value={task.priority}
                                    onChange={(event) => setTask({ ...task, priority: event.target.value })}
                                >
                                    <option value="critical">Critical</option>
                                    <option value="high">High</option>
                                    <option value="medium" >Medium</option>
                                    <option value="low">Low</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div className={"form-label"}>Category</div>
                            <select
                                className={"form-select"}
                                value={task.category}
                                onChange={(event) => setTask({ ...task, category: event.target.value })}
                            >
                                {catagoryList.map((val, index) => (
                                    <option key={index} value={val.category}> 
                                        <span className=" text-2xl max-sm:text-lg">{val.emoji}</span>
                                        <span> {val.category}</span>
                                    </option>
                                ))}
                            </select>

                        </div>
                        

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="warning" onClick={handleSubmit} type='submit'>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

    //     return;
}

export default TaskDetailsForm;
