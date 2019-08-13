import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { IoMdAdd } from 'react-icons/io'

import './style.css'
import Item from '../Item'
import { addItem } from 'redux/actions'

const Column = ({ index: columnIndex }) => {
  const { title, color, itemIndices } = useSelector(state => {
    const column = state.columns[columnIndex]
    const { title, color } = column
    const itemIndices = column.items.map((_, index) => index)
    return { title, color, itemIndices }
  })

  const dispatch = useDispatch()

  const _addItem = () => {
    const item = window.prompt('Enter Item Text')
    if (item) {
      dispatch(addItem({ item, columnIndex }))
    }
  }

  return (
    <section className='column'>
      <header style={{ backgroundColor: color }}>
        <p>{title}</p>
      </header>
      {itemIndices.map(index => <Item key={index} index={index} columnIndex={columnIndex} />)}
      <footer>
        <button className='add-item' onClick={_addItem}><IoMdAdd />Add Item</button>
      </footer>
    </section>
  )
}

Column.propTypes = { index: PropTypes.number.isRequired }

export default  React.memo(Column)