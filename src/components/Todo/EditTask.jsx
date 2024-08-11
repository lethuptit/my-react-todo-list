import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TaskDetailsForm from './TaskDetails';

function EditTask({task}) {

    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const handleShow = () => setShow(true);
    const handleClose=()=> setShow(false);

    const handleSubmit = (task) => {
        dispatch({ type: 'UPDATE_TASK', payload: task });
    }

    // const userFetchStatus = useSelector(state => state.infoApp);
    return (
        <>
            {/* <div className={"d-flex align-items-center hover-style active-style"}>
                <button className={"mx-1 btn btn-sm btn-outline-warning rounded-circle"} type='button' onClick={handleShow}>
                    <i className={"bi bi-pencil-square h5"}></i> 
                </button>
            </div> */}
            <button className={"mx-1 btn btn-sm  rounded-circle"} type='button' onClick={handleShow}>
                    <i className={"bi bi-pencil-square h6"}></i> 
                </button>
            {/* <button type="button" className={"btn  btn-sm mx-1"} onClick={handleShow}>
                <span className={"bi bi-pencil-square"} ></span>
            </button> */}
            {show&&(<TaskDetailsForm onCloseForm={handleClose} onSubmitForm={handleSubmit} taskItem={task}/>)}

        </>
    );
}

export default EditTask;