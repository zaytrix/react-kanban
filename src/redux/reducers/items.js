import { handleActions } from 'redux-actions'
import * as actions from '../actions'

const defaultState = {
  1:  { id: 1,  content: 'Task 1',  order: 0, columnId: 1 },
  2:  { id: 2,  content: 'Task 2',  order: 1, columnId: 1 },
  3:  { id: 3,  content: 'Task 3',  order: 2, columnId: 1 },
  4:  { id: 4,  content: 'Task 4',  order: 0, columnId: 2 },
  5:  { id: 5,  content: 'Task 5',  order: 0, columnId: 3 },
  6:  { id: 6,  content: 'Task 6',  order: 1, columnId: 3 },
  7:  { id: 7,  content: 'Task 7',  order: 0, columnId: 4 },
  8:  { id: 8,  content: 'Task 8',  order: 1, columnId: 4 },
  9:  { id: 9,  content: 'Task 9',  order: 2, columnId: 4 },
  10: { id: 10, content: 'Task 10', order: 3, columnId: 4 },
}

const create = ({ columnId, content }) => ({
  id: Date.now(), columnId, content,
})

export default handleActions({
  [actions.addItem]: (state, { payload: { content, columnId } }) => {
    const newItem = create({ columnId, content })
    return { ...state, [newItem.id]: newItem }
  },

  [actions.moveItem]: (state, { payload: { id, columnId } }) => {
    const { [id]: item } = state
    const newOrder = 1 + Object.values(state).reduce((highestOrder, item) => (
      item.columnId === columnId ? Math.max(highestOrder, item.order) : highestOrder
    ), 0)
    return { ...state, [id]: { ...item, order: newOrder, columnId }}
  },

  [actions.deleteItem]: (state, { payload: id }) => {
    const { [id]: deletedItem, ...newState } = state
    return newState
  },
}, defaultState)

