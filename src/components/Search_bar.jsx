import React, { Component } from 'react';
import { getWeather } from '../actions';
import {connect} from 'react-redux';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onInputChange = (event) => {
    //console.log(event.target.value);
    this.setState({
      term: event.target.value
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const {getWeather} = this.props;
    getWeather(this.state.term);
    this.setState({
      term: ''
    })
    console.log(this.state.term);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get five days forecast in your favorites cities."
          className="form-control"
          value = {this.state.term}
          onChange={this.onInputChange}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }

}


export default connect(null, {getWeather})(SearchBar);
