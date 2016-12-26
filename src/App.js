// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//

import React from 'react';
import Request from 'superagent';
import _ from 'lodash';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount()
  {
    var url = "http://www.omdbapi.com/?s=star&r=json";
    Request.get(url).then((response) =>
    {
      this.setState({
            movies: response.body.Search,
            total: response.body.Results
        });
    });
  }

  componentWillUpdate(nextProps, nextState)
  {

  }

  render()
  {
    var movies = _.map(this.state.movies, (movie) => {
      return <li>{movie.Title}</li>
    });
    return <div><input ref="textBox" type="text" />
    <ul>{movies}</ul>
    </div>
  }
}

 export default App;
