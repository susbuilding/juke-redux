import React, { Component } from 'react';
import store from '../store';

export default class LyricsContainer extends Component () {
  constructor(props) {
    super();

    this.state = {
      store.getState();
    }
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe( (type, action) => {
      store.setState(type, action)
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {

    return(
      <h1>Hey We Did It!</h1>
    )

  }
}
