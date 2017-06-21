import _round from 'lodash/round';
import _sum from 'lodash/sum';

import React from 'react';
import {
	Sparklines,
	SparklinesLine,
	SparklinesReferenceLine
} from "react-sparklines";

function average(data) {
	return _round(_sum(data) / data.length);
}

export default props => {
	return (
		<div>
			<Sparklines height={120} width={180} data={props.data}>
				<SparklinesLine color={props.color}/>
			</Sparklines>
			<div>{average(props.data)}</div>
		</div>
	)
}