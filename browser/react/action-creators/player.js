import { START_PLAYING, STOP_PLAYING, SET_CURRENT_SONG, SET_LIST } from '../constants';

//arrow function with implicit return
export const startPlaying = () => ({type: START_PLAYING})

// we don't need to give it anything else because stop_playing only means isPlaying: false (see player-reducer)
export const stopPlaying = function () {
    return {
        type: STOP_PLAYING
    };
};

//implicit and uses ES6 Enhanced Object Literals
export const setCurrentSong = (currentSong) => ({
        type: SET_CURRENT_SONG,
        currentSong
});

export const setList = function (currentSongList) {
    return {
        type: SET_LIST,
        currentSongList: currentSongList
    };
};

