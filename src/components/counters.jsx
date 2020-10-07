import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  }

  handleDelete = counterId => {
    const filteredCounters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters: filteredCounters});
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState(counters);
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({ counters });
  };

  render() {
    return (
    <div>
      <button 
        onClick={this.handleReset}
        className="btn btn-primary btn-small m-2"> Reset </button>
      {this.state.counters.map(counter => (
        <Counter 
          key={counter.id} 
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          counter={counter}
        />
      ))}
    </div>
    );
  }
}

export default Counters;