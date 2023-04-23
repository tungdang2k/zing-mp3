import actionTypes from "../action/actionTypes"

const initState = {
    currentSongId: null,
    isPlaying:false,
    atAlbum :false,
    songs: null,
<<<<<<< HEAD
=======
    currentSongData:null,
    curAlbumId:null,
    recentSongs:[],
    searchData:{},
>>>>>>> parent of f98498b (search2)
}

const musicReducer = (state = initState, action) => {
    switch (action.type) {
<<<<<<< HEAD
        case actionTypes.SET_CURR_SONG_ID:
=======
        case actionTypes.SET_CUR_SONG_ID:
>>>>>>> parent of f98498b (search2)
            return{
                ...state,
                currentSongId:action.songId || null
            }   
<<<<<<< HEAD
            case actionTypes.PLAY:
=======
        case actionTypes.PLAY:
>>>>>>> parent of f98498b (search2)
            return{
                ...state,
                isPlaying:action.flag 
            }   
<<<<<<< HEAD
            case actionTypes.SET_ALBUM:
=======
        case actionTypes.SET_ALBUM:
>>>>>>> parent of f98498b (search2)
            return{
                ...state,
                atAlbum:action.flag 
            } 
<<<<<<< HEAD
            case actionTypes.PLAYLIST:
=======
        case actionTypes.PLAYLIST:
>>>>>>> parent of f98498b (search2)
            return{
                ...state,
                songs:action.songs  || null
            } 
<<<<<<< HEAD
=======
        case actionTypes.SET_CUR_SONG_DATA:
            return{
                ...state,
                currentSongData:action.data  || null
            }
        case actionTypes.SET_CUR_ALBUM_ID:
            return{
                ...state,
                curAlbumId:action.pid  || null
            }
        case actionTypes.SET_RECENT:
            let songs = state.recentSongs
            if(action.data){
                if(state.recentSongs?.some(i => i.sid === action.data.sid)){
                    songs = songs.filter(i => i.sid !== action.data.sid)
                }
                if(songs.length >= 20){
                    songs.pop()
                }
                songs = [action.data, ...songs]
            }
            return{
                ...state,
                recentSongs :songs
            }
        case actionTypes.SEARCH:
            return {
                ...state,
                searchData:action.data || {} 
            }
                     
>>>>>>> parent of f98498b (search2)
        default:
            return state;
    }

}

export default musicReducer