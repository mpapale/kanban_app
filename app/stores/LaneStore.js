import uuid from 'node-uuid';
import alt from '../libs/alt';
import LaneActions from '../actions/LaneActions';
import update from 'react-addons-update';

class LaneStore {
	constructor() {
		this.bindActions(LaneActions);
		this.lanes = [];
	}

	create(lane) {
		const lanes = this.lanes;

		lane.id = uuid.v4();
		lane.notes = lane.notes || [];

		this.setState({
			lanes: lanes.concat(lane)
		});
	}

	update(updatedLane) {
		const lanes = this.lanes.map(lane => {
			if (lane.id === updatedLane.id) {
				return Object.assign({}, lane, updatedLane);
			}
			return lane;
		});
		this.setState({lanes});
	}

	delete(id) {
		// NB: really this should reap the notes too...
		// There is a leak right now
		this.setState({
			lanes: this.lanes.filter(lane => lane.id !== id)
		});
	}

	attachToLane({laneId, noteId}) {
		// mpapale: Usually I prefer findById and update
		// instead of full map.
		// But maybe this full map helps with setState;
		// findById would be an optimization.
		const lanes = this.lanes.map(lane => {
			if (lane.id === laneId) {
				if (lane.notes.includes(noteId)) {
					console.warn('Already attached note to lane', lanes);
				} 
				else {
					lane.notes.push(noteId);
				}
			}

			return lane;
		});

		this.setState({lanes});
	}

	detachFromLane({laneId, noteId}) {
		const lanes = this.lanes.map(lane => {
			if (lane.id === laneId) {
				lane.notes = lane.notes.filter(note => note.id !== noteId);
			}

			return lane;
		});

		this.setState({lanes});
	}

	move({sourceId, targetId}) {
		const lanes = this.lanes;
		const sourceLane = lanes.filter(lane => lane.notes.includes(sourceId))[0];
		const targetLane = lanes.filter(lane => lane.notes.includes(targetId))[0];
		const sourceNoteIndex = sourceLane.notes.indexOf(sourceId);
		const targetNoteIndex = targetLane.notes.indexOf(targetId);

		if (sourceLane === targetLane) {
			// move at once to avoid complications
			// mpapale: not sure about this syntax
			sourceLane.notes = update(sourceLane.notes, {
				$splice: [
					[sourceNoteIndex, 1],
					[targetNoteIndex, 0, sourceId]
				]
			});
		}
		else {
			// get rid of the source
			sourceLane.notes.splice(sourceNoteIndex, 1);

			// and move it to target
			targetLane.notes.splice(targetNoteIndex, 0, sourceId);
		}

		// mpapale: this is kinda weird, seems to be for the only
		// purpose of triggering a render
		this.setState({lanes});
	}
	
}

export default alt.createStore(LaneStore, 'LaneStore');