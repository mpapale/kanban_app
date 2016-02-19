import alt from '../libs/alt';

// mpapale: I'd prefer `attachNote` and `detachNode`,
// higher level operations of `update`
export default alt.generateActions(
	'create',
	'update',
	'delete',
	'attachToLane',
	'detachFromLane',
	'move'
);