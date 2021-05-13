import React from 'react';
import '../assets/style/currency.css';

export default class Currency extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="currency">
        {(this.props.euro * this.props.rate).toFixed(2)} {this.props.symbol}
      </div>
    );
  }
}