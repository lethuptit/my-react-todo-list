import { SHOW_FILTERS } from '../utils/utils'

const visibilityFilter = (state = SHOW_FILTERS.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
