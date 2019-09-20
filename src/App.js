import React from 'react'
import { useSelector } from 'react-redux'

import Column from 'components/Column'
import './App.css'

const App = props => {
  const columnIds = useSelector(({ columns }) => (
    Object.values(columns)
      .sort((a, b) => a.order - b.order )
      .map(({ id }) => id)
  ))

  return (
    <div className='App'>
      {columnIds.map(id => <Column key={id} id={id} />)}
    </div>
  )
}

export default React.memo(App)
