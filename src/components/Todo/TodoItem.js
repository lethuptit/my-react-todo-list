import { useContext, useState, useEffect } from 'react';
import { Accordion, AccordionContext, Card } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import './todo.scss'
import { formatDueDate, getPriorityFlagClass, getCategoryEmoji } from '../../utils/utils'
import { useDispatch, useSelector } from 'react-redux';
import EditTask from './EditTodo';
import DeleteTask from './DeleteTodo';

function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
        eventKey, () => callback && callback(eventKey),
    );

    const isCurrentEventKey = activeEventKey === eventKey;
    let styleName = isCurrentEventKey ? 'bi bi-arrows-angle-contract' : 'bi bi-arrows-angle-expand'
    return (
        <button type="button" className={'expand-button ms-3'} onClick={decoratedOnClick}>
            <i className={styleName}></i>
            {/* {children} */}
        </button>
    );
}


function TaskViewItem({ task }) {
    const [status, setStatus] = useState(task.status);

    const dispatch = useDispatch();
    useEffect(() => {
        if (task)
            dispatch({ type: 'UPDATE_TASK', payload: { ...task, status: status } });
    }, [status]);

    const priorityStyle = 'priority-box ' + getPriorityFlagClass(task.priority)
    const handleStatusChange = () => {
        setStatus(!status);
       
    }

    // return (
    //     <>
    //         <div class="accordion-item">
    //             <h2 class="accordion-header" id="headingOne">
    //                 <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    //                     Accordion Item #1
    //                 </button>
    //             </h2>
    //             <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    //                 <div class="accordion-body">
    //                     <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // )
    return (
        <>
            <input type='checkbox' className={'form-check-input me-3 toggle-status fs-5'}
                data-task-id={task.id} checked={status} onChange={handleStatusChange} />
            <Accordion className={'container'} defaultActiveKey="1">
                <Card>
                    <Card.Header className={'d-flex justify-content-between align-items-center'}>
                        <div className={'d-flex'}>
                            <h6 className={'fw-bold'}>{task.name}</h6>
                            <div className={priorityStyle}></div>
                        </div>
                        <div className={'task-buttons'}>
                            {/* Show task due if task is not completed */}
                            {!task.status && (
                                <p className={"bg-primary-subtle"}>
                                    <i className={"bi-alarm"} style={{ "fontSize": "1.3rem", color: "cornflowerblue" }}></i>&nbsp;
                                    <span>{formatDueDate(task.due)}</span>)
                                </p>
                            )}
                            {/* Show task done */}
                            {task.status && (
                                <p className={"bg-primary-subtle text-success"}> <i className={"bi bi-check-square-fill"}></i> Completed </p>
                            )}


                            <EditTask task={task} />&nbsp;
                            <DeleteTask task={task} />&nbsp;
                            <ContextAwareToggle eventKey="0" />
                        </div>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <p className={"description"}>{task.description}</p>
                            <p className={`due-date fw-bold`}>Due Date: {task.due}</p>
                            <p className={`priority ${getPriorityFlagClass(task.priority)}`}>Priority: {task.priority ? task.priority.toUpperCase() : 'Medium'}</p>
                            <div className={'border-top mt-2'}>
                                <p>Category: <span>{getCategoryEmoji(task.category)}</span>&nbsp;
                                    <span>{task.category}</span> </p>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
    );
}

export default TaskViewItem;