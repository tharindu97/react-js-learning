import axios from "axios";
import { FETCH_ALBUM_ERROR, FETCH_ALBUM_LOADING, FETCH_ALBUM_SUCCESS } from "./albumActionTypes";


function fetchAlbumLoading(isLoading) {
    return {
        type: FETCH_ALBUM_LOADING,
        payload: isLoading,
    };
}

function fetchAlbumSuccess(data) {
    return {
        type: FETCH_ALBUM_SUCCESS,
        payload: data,
    };
}

function fetchAlbumError(error) {
    return {
        type: FETCH_ALBUM_ERROR,
        payload: error,
    };
}

export function fetchAlbums() {
    return async function (dispatch, getState) {
        dispatch(fetchAlbumLoading(true));
        try {
            const result = await axios.get("https://jsonplaceholder.typicode.com/albums");
            dispatch(fetchAlbumSuccess(result.data));
        } catch (error) {
            dispatch(fetchAlbumError(error));
        }
        setTimeout(() => {
            dispatch(fetchAlbumLoading(false));
        }, [2000]);
    }
}