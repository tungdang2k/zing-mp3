import actionTypes from "../action/actionTypes"

const initState = {
    currentSongId: null,
<<<<<<< HEAD
=======
    isPlaying: false,
    atAlbum: false,
    songs: null,
<<<<<<< HEAD
<<<<<<< HEAD
=======
    currentSongData:null,
    curAlbumId:null,
    recentSongs:[],
    searchData:{},
>>>>>>> parent of f98498b (search2)
=======
    currentSongData: null,
    curAlbumId: null,
    recentSongs: [],
    searchData: {},
    keyword: ''
>>>>>>> 91464eb50fac1167e8cff16304bc0d04aff6fdf9
>>>>>>> 02c123b5bed0469c580f5191e324cb35f117f02e
}

const musicReducer = (state = initState, action) => {
    switch (action.type) {
<<<<<<< HEAD
<<<<<<< HEAD
        case actionTypes.SET_CURR_SONG_ID:
=======
        case actionTypes.SET_CUR_SONG_ID:
>>>>>>> parent of f98498b (search2)
            return{
=======
        case actionTypes.SET_CUR_SONG_ID:
            return {
>>>>>>> 02c123b5bed0469c580f5191e324cb35f117f02e
                ...state,
<<<<<<< HEAD
                currentSongId:action.songId || null
<<<<<<< HEAD
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
=======
=======
                currentSongId: action.songId || null
            }
        case actionTypes.PLAY:
            return {
                ...state,
                isPlaying: action.flag
            }
        case actionTypes.SET_ALBUM:
            return {
                ...state,
                atAlbum: action.flag
            }
        case actionTypes.PLAYLIST:
            return {
                ...state,
                songs: action.songs || null
            }
        case actionTypes.SET_CUR_SONG_DATA:
            return {
                ...state,
                currentSongData: action.data || null
            }
        case actionTypes.SET_CUR_ALBUM_ID:
            return {
                ...state,
                curAlbumId: action.pid || null
            }
        case actionTypes.SET_RECENT:
            let songs = state.recentSongs
            if (action.data) {
                if (state.recentSongs?.some(i => i.sid === action.data.sid)) {
                    songs = songs.filter(i => i.sid !== action.data.sid)
                }
                if (songs.length >= 20) {
>>>>>>> 02c123b5bed0469c580f5191e324cb35f117f02e
                    songs.pop()
                }
                songs = [action.data, ...songs]
            }
<<<<<<< HEAD
            return{
                ...state,
                recentSongs :songs
=======
            return {
                ...state,
                recentSongs: songs
>>>>>>> 02c123b5bed0469c580f5191e324cb35f117f02e
            }
        case actionTypes.SEARCH:
            return {
                ...state,
<<<<<<< HEAD
                searchData:action.data || {} 
            }
                     
>>>>>>> parent of f98498b (search2)
=======
                searchData: action.data || {},
                keyword: action.keyword || ''
>>>>>>> 91464eb50fac1167e8cff16304bc0d04aff6fdf9
            }

>>>>>>> 02c123b5bed0469c580f5191e324cb35f117f02e
        default:
            return state;
    }

}

export default musicReducer