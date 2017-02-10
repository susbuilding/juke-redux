import { START_PLAYING, STOP_PLAYING, SET_CURRENT_SONG, SET_LIST, TOGGLE } from '../constants';

//arrow function with implicit return
const startPlaying = () => ({type: START_PLAYING})

// we don't need to give it anything else because stop_playing only means isPlaying: false (see player-reducer)
const stopPlaying = function () {
    return {
        type: STOP_PLAYING
    };
};

//implicit and uses ES6 Enhanced Object Literals
const setCurrentSong = (currentSong) => ({
        type: SET_CURRENT_SONG,
        currentSong
});

const setList = function (currentSongList) {
    return {
        type: SET_LIST,
        currentSongList: currentSongList
    };
};

export const toggle = function () {
    return function (thunkDispatch, getState){
        const { currentSong } = getState().player;
        if (selectedSong.id !== currentSong.id){
            thunkDispatch(startSong(selectedSong, selectedSongList));
        }
        else {
            thunkDispatch(toggle());
        }
    }
};
