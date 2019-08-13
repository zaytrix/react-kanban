import { createActions } from 'redux-actions'

export const {
  addItem,
  moveItemLeft,
  moveItemRight,
  deleteItem,
} = createActions(
  'ADD_ITEM',
  'MOVE_ITEM_LEFT',
  'MOVE_ITEM_RIGHT',
  'DELETE_ITEM',
)