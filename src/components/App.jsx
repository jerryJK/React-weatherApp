import React, {Component} from 'react';
import SearchBar from './Search_bar';
import {connect} from 'react-redux';


class App extends Component {


  render() {
    console.log(this.props.data);
    return (
      <div>
        <SearchBar />
      </div>
    )
  }

}



function mapStateToProps(state) {
    const {data} = state;
    return {data}
}

export default connect(mapStateToProps, null)(App);
