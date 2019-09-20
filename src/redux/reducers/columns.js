import { handleActions } from 'redux-actions'
// import * as actions from '../actions'

const defaultState = {
  1: { id: 1, order: 0, title: 'Winnie',  color: '#8E6E95' },
  2: { id: 2, order: 1, title: 'Bob',     color: '#39A59C' },
  3: { id: 3, order: 2, title: 'Thomas',  color: '#344759' },
  4: { id: 4, order: 3, title: 'George',  color: '#E8741E' },
}

export default handleActions({
}, defaultState)

