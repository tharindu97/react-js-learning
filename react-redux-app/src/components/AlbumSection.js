import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums } from "../redux/album/albumActions";
import { useEffect } from "react";

function AlbumList() {
    const dispatch = useDispatch();
    const {albums, error, loading} = useSelector((state) => state.album);

    useEffect(() => {
        dispatch(fetchAlbums());
    }, [dispatch]);

    if(loading) return <div>loading.....</div>
    if(error) return <div>{error.message}</div>
    
    return (
        <div>
            <h1>My Album List</h1>
            <div>
                {albums.map((al) => (<div key={al.id}>{al.title}</div>))}
            </div>
        </div>
    );
}

export default AlbumList;