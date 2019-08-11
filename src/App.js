import React, { useState } from 'react'

import Column from 'components/Column'
import './App.css'

const initialColumns = [
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

const App = () => {
  const [columns, setColumns] = useState(initialColumns)

  const moveItem = (itemIndex, columnIndex, direction) => {
    // get the item
    const item = columns[columnIndex].items[itemIndex]

    // get the items of the current column and the destination column
    const currentItems = [...columns[columnIndex].items]
    const destinationColumnIndex = direction === 'left' ? columnIndex - 1 : columnIndex + 1
    const destinationItems = [...columns[destinationColumnIndex].items]

    // remove item from current column, add it to the destination column
    currentItems.splice(itemIndex, 1)
    destinationItems.push(item)

    // set the new columns
    const newColumns = [...columns]
    newColumns[columnIndex].items = currentItems
    newColumns[destinationColumnIndex].items = destinationItems
    setColumns(newColumns)
  }

  const addItem = columnIndex => {
    const item = window.prompt('Enter Item Text')
    if (item) {
      const newItems = [...columns[columnIndex].items]
      newItems.push(item)
      const newColumn = { ...columns[columnIndex], items: newItems }
      const newColumns = [...columns]
      newColumns[columnIndex] = newColumn
      setColumns(newColumns)
    }
  }

  return (
    <div className="App">
      {columns.map(({ title, color, items }, index, { length }) => {
        const columnProps = { key: index, index, title, color, items, addItem }
        if (length > 1) {
          if (index !== 0) {
            columnProps.moveLeft = itemIndex => moveItem(itemIndex, index, 'left')
          }
          if (index !== length - 1) {
            columnProps.moveRight = itemIndex => moveItem(itemIndex, index, 'right')
          }
        }
        return <Column {...columnProps} />
      })}
    </div>
  )
}

export default App
