import actionTypes from "../action/actionTypes"

const initState = {
    currentSongId: null,
<<<<<<< HEAD
=======
    isPlaying: false,
    atAlbum: false,
    songs: null,
    currentSongData: null,
    curAlbumId: null,
    recentSongs: [],
    searchData: {},
    keyword: ''
>>>>>>> 91464eb50fac1167e8cff16304bc0d04aff6fdf9
}

const musicReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_CUR_SONG_ID:
            return {
                ...state,
<<<<<<< HEAD
                currentSongId:action.songId || null
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
                    songs.pop()
                }
                songs = [action.data, ...songs]
            }
            return {
                ...state,
                recentSongs: songs
            }
        case actionTypes.SEARCH:
            return {
                ...state,
                searchData: action.data || {},
                keyword: action.keyword || ''
>>>>>>> 91464eb50fac1167e8cff16304bc0d04aff6fdf9
            }

        default:
            return state;
    }

}

export default musicReducer