import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { content: '' };
  }

  componentDidMount() {
    axios
      .get('https://swapi.co/api/people/1')
      .then(res => {
        this.setState({ content: res.data.name });
      })
      .catch(err => {
        this.setState({ content: 'Não foi dessa vez.' });
      });
  }
  
  render() {
    return (
      <div>
        <h1>
          {this.props.title}
        </h1>
        <p>{this.state.content}</p>
      </div>
    );
  }
}

export default App;