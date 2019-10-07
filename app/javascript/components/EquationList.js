import React from 'react';
import PropTypes from 'prop-types';

class EquationList extends React.Component {
  renderEquations() {
    const { equations } = this.props;
  
    return equations.map(equation => (
      <li key={equation.id}>
        {equation.senior_cofficient}
        {'x^2 '}
        {equation.avarage_cofficent >= 0 &&
         '+ '
        }
        {equation.avarage_cofficent}
        {'x '}
        {equation.free_cofficent >= 0 &&
         '+ '
        }
        {equation.free_cofficent}
        {' = 0'}
        <li key={equation.id}>
          {'First root:'} 
          {equation.first_root}
          {','}
          {' Second root:'} 
          {equation.second_root}
        </li>
      </li>
    ));
  }

  render() {
    return (
      <section>
        <h2> History of computing </h2>
        <ul>{this.renderEquations()}</ul>
      </section>
    );
  }
}

EquationList.propTypes = {
  equations: PropTypes.arrayOf(PropTypes.object),
};

EquationList.defaultProps = {
  equations: [],
};

export default EquationList;