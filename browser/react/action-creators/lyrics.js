import {SET_LYRICS} from '../constants';

export const setLyrics = function (text) {
    return {
        type: SET_LYRICS,
        lyric: text
    };
};

export const fetchLyrics = function (artist, song) {
  return function (thunkDispatch, getState) {
    axios.get(`/api/lyrics/${artist}/${song}`)
      .then(res => {
        thunkDispatch(setLyrics(res.data.lyric));
      })
      .catch(console.error);
  };
};

