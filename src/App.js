import React from 'react'
import { useSelector } from 'react-redux'

import Column from 'components/Column'
import './App.css'

const App = props => {
  const columnIndices = useSelector(state => state.columns.map((_, index) => index))

  return (
    <div className='App'>
      {columnIndices.map(index => <Column key={index} index={index} />)}
    </div>
  )
}

export default React.memo(App)
