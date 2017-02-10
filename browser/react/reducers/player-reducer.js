import {
  START_PLAYING,
  STOP_PLAYING,
  SET_CURRENT_SONG,
  SET_LIST
} from '../constants';

export const initialPlayerState = {
  currentSong: {},
  currentSongList: [],
  isPlaying: false,
  progress: 0
};

export default function (state = initialPlayerState, action) {

  //const newState = Object.assign({}, state);

  switch (action.type) {

    case START_PLAYING:
        return Object.assign({}, state, {isPlaying: true})
    //   newState.isPlaying = true;
    //   break;

    case STOP_PLAYING:
        return Object.assign({}, state, {isPlaying: false})
    //   newState.isPlaying = false;
    //   break;

    case SET_CURRENT_SONG:
        return Object.assign({}, state, {currentSong: action.currentSong})

    case SET_LIST:
        return Object.assign({}, state, {currentSongList: action.currentSongList})

    default:
      return state;

  }

  //return newState;

}
