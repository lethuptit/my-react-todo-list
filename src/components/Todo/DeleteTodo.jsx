import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

function DeleteTask({ task }) {
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();
    let appStatus = useSelector(state => state.infoApp);

    // useEffect(()=>{
    //     // If DELETE action is successful, close the form
    //     if (appStatus.length === 0 || appStatus === '') {
    //         handleClose();
    //     }
    // }, [appStatus])

    const requestDelete=()=>{        
        dispatch({ type: 'DELETE_TASK', payload: task });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_APP_STATUS', payload: 'Requesting' });
        
        //testing for acting loading and waiting for updating appStatus
        // setTimeout(requestDelete,2000)

        requestDelete();
        handleClose();
    }

    const handleClose = () => {
        //clear the error status first
        dispatch({ type: 'SET_APP_STATUS', payload: '' });
        setShow(false)
    };
    const handleShow = () => setShow(true);

    return (
        <>
            <button type="button" className={"btn btn btn-sm"} onClick={handleShow}><span className={"bi bi bi-trash h5"}></span></button>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete
                        {/* Show spinner  */}
                        {appStatus==='Requesting'&&<div class="spinner-border text-secondary" role="status">
                            <span className={"visually-hidden"}>Loading...</span>
                        </div>}
                    </Modal.Title>                    
                </Modal.Header>
                <Modal.Body>
                     {appStatus && <div style={{color:'red'}}>{appStatus}</div>}
                    <div class="modal-body confirmation-message">
                        Are you sure you want to delete this task? This action cannot be
                        undone.
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="warning" onClick={handleSubmit}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteTask;