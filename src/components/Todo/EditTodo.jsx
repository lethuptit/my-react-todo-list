import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TaskDetailsForm from './TodoDetails';

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
            <button className={"btn btn-sm  rounded-circle"} type='button' onClick={handleShow}>
                    <i className={"bi bi-pencil-square h5"}></i> 
                </button>
            {show&&(<TaskDetailsForm onCloseForm={handleClose} onSubmitForm={handleSubmit} taskItem={task}/>)}

        </>
    );
}

export default EditTask;