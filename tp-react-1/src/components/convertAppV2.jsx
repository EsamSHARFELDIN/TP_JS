import React from 'react';

import Currency from './currency.jsx';

import '../assets/style/app.css';

import dataCurrencies from '../data/currencies.js';

export default class ConvertAppV2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {euro : '1',
                  currencies : []};
  }

  componentDidMount() {
    this.setState({currencies : dataCurrencies});
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
          type="text" placeholder="Valeur en euros"
          value={this.state.euro}
          onChange={event => this.setState({euro: event.target.value})}
        />
        {currencyComponents}
      </div>
    );
  }
}