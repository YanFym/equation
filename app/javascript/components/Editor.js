import React from 'react';
import axios from 'axios';
import Header from './Header';
import EquationList from './EquationList';

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      equations: null,
    };
  }

  componentDidMount() {
    axios
      .get('/api/equations.json')
      .then(response => this.setState({ equations: response.data }))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { equations } = this.state;
    if (equations === null) return null;

    return (
      <div className="grid">
        <Header />
        <EquationList equations={equations} />
      </div>
    );
  }
}

export default Editor;
