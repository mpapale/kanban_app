// mpapale: This line is interesting
// Even though `React` is never directly referenced below,
// it is a dependency due to the JSX-React component that is
// being implicitly created.
import React from 'react';
import Lane from './Lane.jsx';

export default ({lanes}) => {
	return (
		<div className="lanes">{lanes.map(lane =>
			<Lane className="lane" key={lane.id} lane={lane} />
		)}</div>
	);
}