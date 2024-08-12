import categoryList from '../data/categoryData'
// import { v4 as uuidv4 } from 'uuid'
import {
  isToday,
  isTomorrow,
  isYesterday,
  isPast,
  isWithinInterval,
  formatDistanceToNow,
  parseISO,
  startOfDay,
  startOfWeek,
  endOfWeek,
  formatToTimeZone 
} from 'date-fns'

export const SHOW_FILTERS = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_WEEK_DUE:'SHOW_WEEK_DUE',
  SHOW_OVER_DUE:'SHOW_OVER_DUE'
}


export function formatDueDate(dueDate) {
  const dateObject = parseISO(dueDate);
  // console.log("date", dateObject);

  if (isToday(dateObject)) {
    return 'Today'
  } else if (isTomorrow(dateObject)) {
    return 'Tomorrow'
  } else if (isYesterday(dateObject)) {
    return 'Yesterday'
  } else {
    return formatDistanceToNow(dateObject, { addSuffix: true })
  }
}

export function isDueInThisWeek(due){
  // Today, start of this week, and end of this week
  const today = startOfDay(new Date())
  const startOfThisWeek = startOfWeek(today, { weekStartsOn: 0 })
  const endOfThisWeek = endOfWeek(today, { weekStartsOn: 0 })
  if(isWithinInterval(due, {
      start: startOfThisWeek,
      end: endOfThisWeek
    }))
    return true;
  return false;
}



export function getPriorityFlagClass(priority) {
  return priority === 'high'
    ? 'task-high'
    : priority === 'medium'
      ? 'task-medium'
      : priority === 'low' ? 'task-low' : 'task-critical';
}

export function getPriorityClass(priority) {
  return priority === 'high'
    ? 'bg-danger-subtle'
    : priority === 'medium'
      ? 'bg-warning-subtle'
      : 'bg-success-subtle'
}

export function getCategoryEmoji(category) {
  var emoji='📁';
  if (category) {
    for(let i in categoryList)
    {
      const val = categoryList[i];
      if (val.category === category) {        
        emoji = val.emoji;
        return emoji;
      }      
    }
  }
  // console.log(emoji);
  return emoji;

}


export const getVisibleTasks = (taskList, filter) => {
  if(taskList.length===0)
    return [];

  switch (filter) {
    case SHOW_FILTERS.SHOW_ALL:
      return ["All Tasks", taskList]
    case SHOW_FILTERS.SHOW_COMPLETED:
      return ["Completed Tasks", taskList.filter(t => t.status)]
    case SHOW_FILTERS.SHOW_ACTIVE:
      return ["Active Tasks", taskList.filter(t => !t.status)]
    case SHOW_FILTERS.SHOW_WEEK_DUE:
      return ["This Week Tasks", taskList.filter(t => isDueInThisWeek(t.due))]
    case SHOW_FILTERS.SHOW_OVER_DUE:
      return ["Overdue Tasks", taskList.filter(t => (!t.status && isPast(parseISO(t.due)) && (!isToday(parseISO(t.due)))))]
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}




