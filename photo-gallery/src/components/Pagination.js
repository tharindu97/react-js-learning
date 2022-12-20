import React from 'react'
import { useDispatch } from 'react-redux'
import { nextPage, prevPage } from '../redux/gallery/gallerySlice';

function Pagination() {
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(nextPage());
  }

  const handlePrevious = () => {
    dispatch(prevPage());
  }

  return (
    <div className="flex justify-center gap-4 my-4">
      <button onClick={handlePrevious} className='px-3 py-2 bg-blue-100 text-blue-700 shadow'>Previous</button>
      <button onClick={handleNext} className='px-3 py-2 bg-blue-100 text-blue-700 shadow'>Next</button>
    </div>
  )
}

export default Pagination
