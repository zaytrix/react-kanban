import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from 'react-icons/io'

import './style.css'
import { moveItem, deleteItem } from 'redux/actions'

const Item = ({ id }) => {
  const { item, leftColumnId, rightColumnId } = useSelector(({ columns, items }) => {
    const item = items[id]
    const sortedColumns = Object.values(columns).sort((a, b) => a.order - b.order)
    const columnIndex = sortedColumns.findIndex(column => column.id === item.columnId)
    const [leftColumnIndex, rightColumnIndex] = [-1, 1].map(index => index + columnIndex)

    return {
      item,
      leftColumnId: leftColumnIndex >= 0
        ? sortedColumns[leftColumnIndex].id : null,
      rightColumnId: rightColumnIndex < sortedColumns.length
        ? sortedColumns[rightColumnIndex].id : null,
    }
  })
  const dispatch = useDispatch()

  const _moveLeft = () => dispatch(moveItem({ id, columnId: leftColumnId }))
  const _moveRight = () => dispatch(moveItem({ id, columnId: rightColumnId }))
  const _delete = () => {
    const canDelete = window.confirm('Are you sure you want to delete this item?')
    if (canDelete) dispatch(deleteItem(id))
  }

  const _renderLeftButton = () => leftColumnId
    ? <button className='item-move' onClick={_moveLeft}><IoIosArrowBack /></button>
    : null

  const _renderRightButton = () => rightColumnId
    ? <button className='item-move' onClick={_moveRight}><IoIosArrowForward /></button>
    : null

  const { content } = item
  return (
    <article className='item'>
      {_renderLeftButton()}
      <div className='item-text'>
        <p>{content}</p>
        <button onClick={_delete}><IoMdClose /></button>
      </div>
      {_renderRightButton()}
    </article>
  )
}

Item.propTypes = { id: PropTypes.number.isRequired }

export default React.memo(Item)