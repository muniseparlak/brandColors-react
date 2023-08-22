import React, { useContext } from 'react'
import { GrSearch } from 'react-icons/gr'
import MainContext from '../MainContext'

function Search() {

  const {search, setsearch} = useContext(MainContext)

  return (
    <div className='search'>
        <div className='icon'>
        <GrSearch/>
        </div>
      <input type='text' onChange={e => setsearch(e.target.value )} placeholder='Search Brand'/>
    </div>
  )
}

export default Search
