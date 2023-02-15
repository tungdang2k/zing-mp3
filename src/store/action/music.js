import actionTypes from "./actionTypes";
import * as apis from '../../apis'

export const setCurrentSongId = (songId ) => ({
    type:actionTypes.SET_CURR_SONG_ID,
    songId
})

export const play = (flag ) => ({
    type:actionTypes.PLAY,
    flag
})


