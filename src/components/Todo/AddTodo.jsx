import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TaskDetailsForm from './TodoDetails';

function AddTask() {

    const defaultTask = {
        name: '',
        description: '',
        category: '',
        status: false,
        priority:'medium'
    }

    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    
    const handleShow = () => {setShow(true);}
    const handleClose=()=> setShow(false);

    const handleSubmit = (task) => {
        dispatch({ type: 'ADD_TASK', payload: task });
    }

    return (
        <>
            <div className={"d-flex align-items-center py-1 px-2 gap-2 mt-3 mb-2 hover-style rounded active-style"}>
                <button className={"btn btn-sm btn-outline-warning "} type='button' onClick={handleShow}>
                    <i className={"bi bi-plus-circle-fill h5"}></i> &nbsp;
                    Add task
                </button>
            </div>
            {show&&(<TaskDetailsForm onSubmitForm={handleSubmit} onCloseForm={handleClose} taskItem={defaultTask} />)}
        </>
    );
}

export default AddTask;