import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { ListSongs, ListSong } from '../../components'
import * as actions from '../../store/action'

const SearchSongs = () => {
  const { searchData } = useSelector(state => state.music)
  const dispath = useDispatch()
  useEffect(() => {
    dispath(actions.getSearchSongs(searchData?.top?.id))
  }, [searchData])
  return (
    <div className='w-full mx-[60px]'>

      <ListSongs isHideTime />

    </div>
  )
}

export default SearchSongs
