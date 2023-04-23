import actionTypes from "./actionTypes";
import * as apis from '../../apis'

export const setCurrentSongId = (songId ) => ({
<<<<<<< HEAD
    type:actionTypes.SET_CURR_SONG_ID,
=======
    type:actionTypes.SET_CUR_SONG_ID,
>>>>>>> parent of f98498b (search2)
    songId
})

export const play = (flag ) => ({
    type:actionTypes.PLAY,
    flag
})

export const playAlbum = (flag ) => ({
    type:actionTypes.SET_ALBUM,
    flag
})
export const setPlaylist = (songs ) => ({
    type:actionTypes.PLAYLIST,
    songs
})

export const loading = (flag ) => ({
    type:actionTypes.LOADING,
    flag
})

<<<<<<< HEAD
=======
export const setCurSongData = (data) => ({
    type:actionTypes.SET_CUR_SONG_DATA,
    data
})

export const setCurAlbumId = (pid) => ({
    type:actionTypes.SET_CUR_ALBUM_ID,
    pid
})

export const setRecent = (data) => ({
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

