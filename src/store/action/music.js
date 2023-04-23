import actionTypes from "./actionTypes";
import * as apis from '../../apis'

export const setCurrentSongId = (songId) => ({
    type: actionTypes.SET_CUR_SONG_ID,
    songId
})

<<<<<<< HEAD
=======
export const play = (flag) => ({
    type: actionTypes.PLAY,
    flag
})

export const playAlbum = (flag) => ({
    type: actionTypes.SET_ALBUM,
    flag
})
export const setPlaylist = (songs) => ({
    type: actionTypes.PLAYLIST,
    songs
})

export const loading = (flag) => ({
    type: actionTypes.LOADING,
    flag
})

export const setCurSongData = (data) => ({
    type: actionTypes.SET_CUR_SONG_DATA,
    data
})

export const setCurAlbumId = (pid) => ({
    type: actionTypes.SET_CUR_ALBUM_ID,
    pid
})

export const setRecent = (data) => ({
    type: actionTypes.SET_RECENT,
    data
})

export const search = (keyword) => async (dispatch) => {
    try {
        const response = await apis.apiSearch(keyword)
        if (response.data.err === 0) {
            dispatch({
                type: actionTypes.SEARCH,
                data: response.data.data,
                keyword
            })
        } else {
            dispatch({
                type: actionTypes.SEARCH,
                data: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.SEARCH,
            data: null
        })
    }

}

export const getSearchSongs = (singerId) => async (dispatch) => {
    try {
        const response = await apis.apiGetArtistSongs(singerId)
        if (response.data.err === 0) {
            dispatch({
                type: actionTypes.PLAYLIST,
                songs: response.data.data.items,
            })
        } else {
            dispatch({
                type: actionTypes.PLAYLIST,
                songs: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.PLAYLIST,
            data: null
        })
    }

}

// export const fetchDetailPlayList = (pid) => async (dispatch) =>{

//     try {
//         const response = await apis.apiGetDetailPlayList(pid)
//         if(response?.data.err  === 0){
//             dispatch({
//                 type:actionTypes.PLAYLIST,
//                 songs:response?.data?.data?.song.items
//             })
//         }
//     } catch (error) {
//         dispatch({
//             type:actionTypes.PLAYLIST,
//             songs:null
//         })
//     }
// }
>>>>>>> 91464eb50fac1167e8cff16304bc0d04aff6fdf9

