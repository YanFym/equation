import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { isEmptyObject, validateEquation } from '../helpers/helper';

class EquationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      equation: props.equation,
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  updateEquation(key, value) {
    this.setState(prevState => ({
      equation: {
        ...prevState.equation,
        [key]: value,
      },
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { equation } = this.state;
    const errors = validateEquation(equation);

    if (!isEmptyObject(errors)) {
      this.setState({ errors });
    } else {
      const { onSubmit } = this.props;
      onSubmit(equation);
    }
  }

  handleInputChange(equation) {
    const { target } = equation;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.updateEquation(name, value);
  }

  renderErrors() {
    const { errors } = this.state;

    if (isEmptyObject(errors)) {
      return null;
    }

    return (
      <div className="errors">
        <h3>Same errors detect</h3>
        <ul>
          {Object.values(errors).map(error => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const { equation } = this.state;
    const { path } = this.props;

    return (
      <div>
        <h2>Equation</h2>

        {this.renderErrors()}

        <form className="equationForm" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="senior_cofficient">
              <strong>senior_cofficient:</strong>
              <input
                type="text"
                id="senior_cofficient"
                name="senior_cofficient"
                onChange={this.handleInputChange}
                value={equation.senior_cofficient}
              />
            </label>
            <label htmlFor="avarage_cofficent">
              <strong>avarage_cofficent:</strong>
              <input
                type="text"
                id="avarage_cofficent"
                name="avarage_cofficent"
                onChange={this.handleInputChange}
                value={equation.avarage_cofficent}
              />
            </label>
            <label htmlFor="free_cofficent">
              <strong>free_cofficent:</strong>
              <input
                type="text"
                id="free_cofficent"
                name="free_cofficent"
                onChange={this.handleInputChange}
                value={equation.free_cofficent}
              />
            </label>
          </div>
          <div className="form-actions">
            <button type="submit">Solve</button>
          </div>
        </form>
      </div>
    );
  }
}

EquationForm.propTypes = {
  equation: PropTypes.shape(),
  onSubmit: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

EquationForm.defaultProps = {
  equation: {
    senior_cofficient: '',
    avarage_cofficent: '',
    free_cofficent: '',
  },
};

export default EquationForm;
