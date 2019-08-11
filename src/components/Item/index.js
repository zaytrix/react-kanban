import React from 'react'
import PropTypes from 'prop-types'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import './style.css'

const Item = React.memo(({
  text,
  index,
  moveLeft,
  moveRight,
}) => (
  <article className='item'>
    {moveLeft && <button onClick={() => moveLeft(index)}><IoIosArrowBack /></button>}
    <p className='item-text'>{text}</p>
    {moveRight && <button href='#' onClick={() => moveRight(index)}><IoIosArrowForward /></button>}
  </article>
))

Item.propTypes = {
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  moveLeft: PropTypes.func,
  moveRight: PropTypes.func,
}

export default Item