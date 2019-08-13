import { handleActions } from 'redux-actions'
import * as actions from '../actions'

const defaultState = [
  {
    title: 'Winnie',
    color: '#8E6E95',
    items: ['Task 1', 'Task 2', 'Task 3'],
  },
  {
    title: 'Bob',
    color: '#39A59C',
    items: ['Task 4'],
  },
  {
    title: 'Thomas',
    color: '#344759',
    items: ['Task 5', 'Task 6'],
  },
  {
    title: 'George',
    color: '#E8741E',
    items: ['Task 7', 'Task 8', 'Task 9', 'Task 10'],
  },
]

const moveItem = ({ state, itemIndex, columnIndex: oldColumnIndex, indexShift }) => {
  const newState = [...state]
  const newColumnIndex = oldColumnIndex + indexShift

  const [oldColumn, newColumn] = [oldColumnIndex, newColumnIndex]
    .map(index => ({ ...newState[index] }))

  const [oldItems, newItems] = [oldColumn, newColumn]
    .map(column => [...column.items])

  const item = oldItems[itemIndex]
  oldItems.splice(itemIndex, 1)
  newItems.push(item)

  oldColumn.items = oldItems
  newColumn.items = newItems

  newState[oldColumnIndex] = oldColumn
  newState[newColumnIndex] = newColumn

  return newState
}

export default handleActions({
  [actions.addItem]: (state, { payload: { item, columnIndex } }) => {
    const newState = [...state]
    const column = { ...newState[columnIndex] }
    const items = [...column.items]

    items.push(item)
    column.items = items
    newState[columnIndex] = column

    return newState
  },

  [actions.moveItemLeft]: (state, { payload: { itemIndex, columnIndex } }) => {
    return moveItem({ state, itemIndex, columnIndex, indexShift: -1 })
  },

  [actions.moveItemRight]: (state, { payload: { itemIndex, columnIndex } }) => {
    return moveItem({ state, itemIndex, columnIndex, indexShift: 1 })
  },

  [actions.deleteItem]: (state, { payload: { itemIndex, columnIndex } }) => {
    const newState = [...state]
    const column = { ...newState[columnIndex] }
    const items = [...column.items]

    items.splice(itemIndex, 1)
    column.items = items
    newState[columnIndex] = column

    return newState
  },
}, defaultState)

