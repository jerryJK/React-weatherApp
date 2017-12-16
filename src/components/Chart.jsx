import React, { Component } from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine  } from 'react-sparklines';


class Chart extends Component {

  average(data) {
    return _.round(_.sum(data)/data.length);
  }

  render() {
    return (
      <div>
        <Sparklines height={100} width={180} margin={10} data={this.props.data}>
          <SparklinesLine color={this.props.color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>{this.average(this.props.data)}{this.props.units}</div>
      </div>
    )
  }

}

export default Chart;
