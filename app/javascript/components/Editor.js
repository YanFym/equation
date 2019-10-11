import React from 'react';
import axios from 'axios';
import Header from './Header';
import PropTypes from 'prop-types';
import EquationList from './EquationList';
import { Switch } from 'react-router-dom';
import EquationForm from './EquationForm';
import PropsRoute from './PropsRoutes';
import { handleAjaxError } from '../helpers/helper';

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      equations: null,
    };

    this.addEquation = this.addEquation.bind(this)
  }

  addEquation(newEquation) {
    axios
      .post('/api/equations.json', newEquation)
      .then((response) => {
        const savedEquation = response.data;
        this.setState(prevState => ({
          equations: [...prevState.equations, savedEquation],
        }));
        const { history } = this.props;
        history.push(`/equations/${savedEquation.id}`);
      })
      .catch(handleAjaxError);
  }

  componentDidMount() {
    axios
      .get('/api/equations.json')
      .then(response => this.setState({ equations: response.data }))
      .catch(handleAjaxError)
  }

  render() {
    const { equations } = this.state;
    if (equations === null) return null;

    return (
      <div className="grid">
        <Header />
        <EquationList equations={equations} />
        <Switch>
          <PropsRoute path="/equations/new" component={EquationForm} onSubmit={this.addEquation} />
        </Switch>
      </div>
    );
  }
}

export default Editor;
