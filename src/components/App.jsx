import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchBar from './Search_bar';
import WeatherList from './Weather_list';



class App extends Component {


  render() {
    console.log(this.props.data);
    return (
      <div className="container">
        <SearchBar />
        <WeatherList />
      </div>
    )
  }

}



function mapStateToProps(state) {
    const {data} = state;
    return {data}
}

export default connect(mapStateToProps, null)(App);
