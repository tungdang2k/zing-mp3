import actionTypes from "./actionTypes";
import * as apis from '../../apis'

<<<<<<< HEAD
export const setCurrentSongId = (songId ) => ({
<<<<<<< HEAD
    type:actionTypes.SET_CURR_SONG_ID,
=======
    type:actionTypes.SET_CUR_SONG_ID,
>>>>>>> parent of f98498b (search2)
=======
export const setCurrentSongId = (songId) => ({
    type: actionTypes.SET_CUR_SONG_ID,
>>>>>>> 02c123b5bed0469c580f5191e324cb35f117f02e
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
export const setCurSongData = (data) => ({
    type:actionTypes.SET_CUR_SONG_DATA,
=======
export const setCurSongData = (data) => ({
    type: actionTypes.SET_CUR_SONG_DATA,
>>>>>>> 02c123b5bed0469c580f5191e324cb35f117f02e
    data
})

export const setCurAlbumId = (pid) => ({
<<<<<<< HEAD
    type:actionTypes.SET_CUR_ALBUM_ID,
=======
    type: actionTypes.SET_CUR_ALBUM_ID,
>>>>>>> 02c123b5bed0469c580f5191e324cb35f117f02e
    pid
})

export const setRecent = (data) => ({
<<<<<<< HEAD
    type:actionTypes.SET_RECENT,
    data
})

export const search = (keyword) => async (dispatch) =>  {
    try {
        const response = await apis.apiSearch(keyword)
        if(response.data.err === 0){
            dispatch({
                type:actionTypes.SEARCH,
                data:response.data.data
            })
        }else{
            dispatch({
                type:actionTypes.SEARCH,
                data:null
            })
        }
    } catch (error) { 
        dispatch({
            type:actionTypes.SEARCH,
            data:null
        })
    }
    
}

>>>>>>> parent of f98498b (search2)
=======
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

>>>>>>> 02c123b5bed0469c580f5191e324cb35f117f02e
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

