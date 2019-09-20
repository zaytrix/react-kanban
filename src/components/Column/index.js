import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { IoMdAdd } from 'react-icons/io'

import './style.css'
import Item from '../Item'
import { addItem } from 'redux/actions'

const Column = ({ id }) => {
  const { column, itemIds } = useSelector(({ columns, items }) => ({
    column: columns[id],
    itemIds: Object.values(items)
      .filter(item => item.columnId === id)
      .sort((a, b) => a.order - b.order)
      .map(({ id }) => id)
  }))
  const dispatch = useDispatch()

  const _addItem = () => {
    const content = window.prompt('Enter Item Text')
    if (content) dispatch(addItem({ content, columnId: id }))
  }

  const { title, color } = column
  return (
    <section className='column'>
      <header style={{ backgroundColor: color }}>
        <p>{title}</p>
      </header>
      {itemIds.map(id => <Item key={id} id={id} />)}
      <footer>
        <button className='add-item' onClick={_addItem}><IoMdAdd />Add Item</button>
      </footer>
    </section>
  )
}

Column.propTypes = { id: PropTypes.number.isRequired }

export default React.memo(Column)