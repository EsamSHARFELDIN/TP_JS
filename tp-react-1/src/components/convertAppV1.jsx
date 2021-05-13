import React from 'react';

import Currency from './currency.jsx';

import '../assets/style/app.css';

import dataCurrencies from '../data/currencies.js';

export default class ConvertAppV1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {euro : '1',
                  currencies : []};
    this.inputRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({currencies : dataCurrencies});
  }

  handleClick() {
    this.setState({euro : this.inputRef.current.value});
  }

  render() {
    const currencyComponents = this.state.currencies.map(data =>
      <Currency
        rate={data.rate}
        symbol={data.symbol}
        euro={parseFloat(this.state.euro)}
        key={data.code}
      />
    );
    return (
      <div className="app">
        <input
          ref={this.inputRef} type="text" placeholder="Valeur en euros"
        />
        <button onClick={this.handleClick}>
          OK
        </button>
        {currencyComponents}
      </div>
    );
  }
}