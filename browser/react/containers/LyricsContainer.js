import React, { Component } from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics'

export default class LyricsContainer extends Component () {
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
    console.log(this.state)
  }

  render () {

    return (
      <Lyrics
        text={this.state.text}
        setArtist={this.setArtist}
        setSong={this.setSong}
        handleSubmit={this.handleSubmit}
        artistQuery={this.state.artistQuery}
        songQuery={this.state.songQuery}
      />
    );

  }
}
