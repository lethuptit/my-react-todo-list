import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import {trialTasksString } from '../data/defaultData'

const baseUrl ="http://localhost:5000";
 
const trialTasks = Object.values(trialTasksString);// Local data for testing UI
const isUseRemotelData = true;// handling use remote data or local data


//Gets all tasks from the server REST API
function* fetchTasks() {
  try {
    if(isUseRemotelData){
      const response = yield axios.get(`${baseUrl}/api/task`);    
      yield put({ type: 'SET_TASK_LIST', payload: response.data });      
    }
    else {
      yield put({ type: 'SET_TASK_LIST', payload: trialTasks });
    }

    yield put({ type: 'SET_APP_STATUS', payload: '' });//set sucessful status

  } catch (error) {
    console.error('Failed to get task list:', error);
    //set failed status 
    yield put({ type: 'SET_APP_STATUS', payload: 'Failed to get the task list.' });
  }
}

//Adds a new task using server API
function* addNewTask(action) {
  try {
    if(isUseRemotelData){
      const response = yield axios.post(`${baseUrl}/api/task/`, action.payload);      
    }
    else{
      trialTasks.push(action.payload)
    }
    yield put({ type: 'FETCH_TASK_LIST' });
  } catch (error) {
    yield put({ type: 'SET_APP_STATUS' , payload:'Failed on adding a new task...'});
    console.error('Failed to add new task:', error);
  }
}

//Deletes task by id using server API
function* deleteTask(action) {
  try {
    if(isUseRemotelData){
      yield axios.delete(`${baseUrl}/api/task/${action.payload.id}`);      
    }
    else{
      trialTasks = trialTasks.filter(task=>task.id!=action.payload.id)
    }
    yield put({ type: 'FETCH_TASK_LIST' });
  } catch (error) {
    console.error('Failed to delete task:', error);
    yield put({ type: 'SET_APP_STATUS', payload: 'Failed to delete the task.' });
  }
}

//Updates task by id using server API
function* updateTask(action) {
  try {
    if(isUseRemotelData){
      const response = yield axios.put(`${baseUrl}/api/task/${action.payload.id}`, action.payload);
      if(response.status){
        yield put({ type: 'FETCH_TASK_LIST', payload: action.payload });
      }
    }else{
      trialTasks.forEach((task, idx)=>{
        if (task.id === action.payload.id){
          trialTasks[idx] = action.payload;
        }
        })
      yield put({ type: 'FETCH_TASK_LIST', payload: action.payload });
    }

  } catch (error) {
    console.error('Failed to update task:', error);
    yield put({ type: 'SET_APP_STATUS', payload: 'Failed to update the task' });
  }
}

function* todoWatcherSaga() {
  yield takeLatest('FETCH_TASK_LIST', fetchTasks);
  yield takeLatest('ADD_TASK', addNewTask);
  yield takeLatest('DELETE_TASK', deleteTask);
  yield takeLatest('UPDATE_TASK', updateTask);
}

export default todoWatcherSaga;