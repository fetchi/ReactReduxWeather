import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import wtlist from '../containers/wt_list.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <wtlist/>
      </div>
    );
  }
}
