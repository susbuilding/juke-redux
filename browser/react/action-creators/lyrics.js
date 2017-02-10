import {SET_LYRICS} from '../contants';

export const setLyrics = function (text) {
    return {
        type: SET_LYRICS,
        lyric: text
    }
}
