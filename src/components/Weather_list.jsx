import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './Chart';



class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td class="col-sm-3">
          {name}
        </td>
        <td class="col-sm-3">
          <Chart data={temps} color="orange" units="&#8451;"/>
        </td>
        <td class="col-sm-3">
          <Chart data={pressures} color="green" units="hPa"/>
        </td>
        <td class="col-sm-3">
          <Chart data={humidities} color="blue" units="%"/>
        </td>
      </tr>
    )
  }

  render() {
    console.log(this.props.data);
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature [&#8451;]</th>
            <th>Pressure [hPa]</th>
            <th>Humidity [%]</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }

}

function mapStateToProps(state) {
  const {data} = state;
  return { data }
}

export default connect(mapStateToProps)(WeatherList);
