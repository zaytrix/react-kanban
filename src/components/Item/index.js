import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from 'react-icons/io'

import './style.css'
import { moveItemLeft, moveItemRight, deleteItem } from 'redux/actions'

const Item =({
  index: itemIndex,
  columnIndex,
}) => {
  const { lastColumnIndex, item } = useSelector(state => ({
    lastColumnIndex: state.columns.length,
    item: state.columns[columnIndex].items[itemIndex],
  }))

  const dispatch = useDispatch()

  const payload = { itemIndex, columnIndex }
  const _moveLeft = () => dispatch(moveItemLeft(payload))
  const _moveRight = () => dispatch(moveItemRight(payload))
  const _delete = () => {
    const canDelete = window.confirm('Are you sure you want to delete this item?')
    if (canDelete) {
      dispatch(deleteItem(payload))
    }
  }

  const _renderLeftButton = () => columnIndex > 0
    ? <button className='item-move' onClick={_moveLeft}><IoIosArrowBack /></button>
    : null

  const _renderRightButton = () => columnIndex < lastColumnIndex
    ? <button className='item-move' onClick={_moveRight}><IoIosArrowForward /></button>
    : null

  return (
    <article className='item'>
      {_renderLeftButton()}
      <div className='item-text'>
        <p>{item}</p>
        <button onClick={_delete}><IoMdClose /></button>
      </div>
      {_renderRightButton()}
    </article>
  )
}

Item.propTypes = {
  index: PropTypes.number.isRequired,
  columnIndex: PropTypes.number.isRequired,
}

export default React.memo(Item)