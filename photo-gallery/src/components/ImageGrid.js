import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchImages } from '../redux/gallery/gallerySlice';

function ImageGrid() {
  const dispatch = useDispatch();
  const { loading, images, error, page }  = useSelector((state) => state.gallery);
  useEffect(() => {
    dispatch(fetchImages(page));
  }, [dispatch, page]);

  if(loading) return <div>Loading....</div>;
  if(error) return <div>{error}</div>;
 
  return (
    <div className='grid grid-cols-4 gap-4'>
      {images.map((img) => (
        <div key={img.id}> 
            <img src={img.download_url} className="h-[30vh] w-full object-cover" />
        </div>
      ))}
    </div>
  )
}

export default ImageGrid
