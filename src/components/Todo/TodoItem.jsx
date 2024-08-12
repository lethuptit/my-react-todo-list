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
                                    <i className={"bi-alarm h5"} style={{  color: "cornflowerblue" }}></i>&nbsp;
                                    <span>{formatDueDate(task.due)}</span>)
                                </p>
                            )}
                            {/* Show task done */}
                            {task.status && (
                                <p className={"bg-primary-subtle text-success"}> <i className={"bi bi-check-square-fill"}></i> Completed </p>
                            )}


                            <EditTask task={task} />
                            <DeleteTask task={task} />
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