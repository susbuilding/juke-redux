import React, { Component } from 'react';
import store from '../store';

export default class LyricsContainer extends Component () {
  constructor(props) {
    super();

    this.state = store.getState();

  }

  componentDidMount() {
    this.unsubscribe = store.subscribe( () => {
      this.setState(store.getState());
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {

    return(
      <h1>Hey We Did It!</h1>
    );

  }
}
