import React, {Component} from 'react';
import { getWeather } from '../actions';
import {connect} from 'react-redux';


class App extends Component {

  componentDidMount() {
    const {getWeather} = this.props;
      getWeather('Krakow');
  }

  render() {
    console.log('data', this.props.data[0]);

    if(!this.props.data[0]) {
      return (
        <div>Loading...</div>
      )
    }
    return (
      <div>{this.props.data[0].city.name}</div>
    )
  }

}



function mapStateToProps(state) {
    const {data} = state;
    return {data}
}


export default connect(mapStateToProps, {getWeather})(App);
