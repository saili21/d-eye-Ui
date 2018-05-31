import React from 'react';
import { BarChart } from 'react-d3-components';
import * as d3 from "d3";

class BarChartComponent extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.barData = [{
			label: 'somethingA',
			values: [{ x: 'SomethingA', y: 10 }, { x: 'SomethingB', y: 4 }, { x: 'SomethingC', y: 3 }]
		}];
	}

	tooltip = (label, y0, value) => {
		return label + value;
	}

	colorScale = () => {
		return this.props.barChartColor;
	}

	render() {

		return (
			<BarChart
				data={this.barData}
				width={400}
				height={250}
				margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
				tooltipHtml={this.tooltip}
				colorScale={this.colorScale}
			/>
		);
	}
}

export default BarChartComponent