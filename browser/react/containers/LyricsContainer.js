import React, { Component } from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';
import { setLyrics, fetchLyrics } from '../action-creators/lyrics';
import axios from 'axios';

export default class LyricsContainer extends Component {
  constructor(props) {
    super();

    this.state = Object.assign({
      artistQuery: '',
      songQuery: ''
    }, store.getState())

    this.setArtist = this.setArtist.bind(this);
    this.setSong = this.setSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe( () => {
      this.setState(store.getState());
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  setArtist(artist){
    this.setState({artistQuery: artist})
  }

  setSong(song){
    this.setState({artistQuery: song})
  }

  handleSubmit(){
    // the sync way to do what's on line 47 w/o Thunk
    // console.log(this.state);
    // axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
    //   .then(response =>{
    //     const setLyricsAction = setLyrics(response.data.lyric)
    //     store.dispatch(setLyricsAction)
    //   })
    //   .catch(console.error());
    if (this.state.artistQuery && this.state.songQuery) {
      store.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery))
    }
  }

  render () {

    return (
      <Lyrics
        text={this.state.lyric.text}
        setArtist={this.setArtist}
        setSong={this.setSong}
        handleSubmit={this.handleSubmit}
        artistQuery={this.state.artistQuery}
        songQuery={this.state.songQuery}
      />
    );

  }
}
