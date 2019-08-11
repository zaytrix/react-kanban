import React from 'react'
import PropTypes from 'prop-types'
import { IoMdAdd } from 'react-icons/io'
import './style.css'
import Item from '../Item'

const Column = React.memo(({
  title,
  color,
  items,
  moveLeft,
  moveRight,
  addItem,
  index,
}) => (
  <section className='column'>
    <header style={{ backgroundColor: color }}>
      <p>{title}</p>
    </header>
    {items.map((text, itemIndex) => (
      <Item
        key={itemIndex}
        index={itemIndex}
        text={text}
        moveLeft={moveLeft}
        moveRight={moveRight}
      />
    ))}
    <footer>
      <button className='add-item' onClick={() => addItem(index)}><IoMdAdd />Add Item</button>
    </footer>
  </section>
))

Column.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  moveLeft: PropTypes.func,
  moveRight: PropTypes.func,
  addItem: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
}

export default Column