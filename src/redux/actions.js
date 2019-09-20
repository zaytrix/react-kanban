import { createActions } from 'redux-actions'

export const {
  addItem,
  moveItem,
  deleteItem,
} = createActions(
  'ADD_ITEM',
  'MOVE_ITEM',
  'DELETE_ITEM',
)