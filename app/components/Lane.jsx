import AltContainer from 'alt-container';
import React from 'react';

import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore'; // mpapale: hmmm. Actions and Store?
// I guess it's OK if you make sure never to write to Store
// Actions are your avenue for "writes" (abstract writes, really)

import LaneActions from '../actions/LaneActions';

export default class Lane extends React.Component {
	render() {
		const {lane, ...props} = this.props;

		return (
			<div {...props}>
				<div className="lane-header">
					<div className="lane-add-note">
						<button onClick={this.addNote}>+</button>
					</div>
					<div className="lane-name">{lane.name}</div>
				</div>
				<AltContainer
					stores={[NoteStore]}
					inject={{
						notes: () => NoteStore.getNotesByIds(lane.notes)
					}}
				>
					<Notes onEdit={this.editNote} onDelete={this.deleteNote} />
				</AltContainer>
			</div>
		);
	}

	addNote = (e) => {
		const laneId = this.props.lane.id;
		const note = NoteActions.create({task: 'New task'});

		LaneActions.attachToLane({
			noteId: note.id,
			laneId
		});
	};

	editNote(id, task) {
		NoteActions.update({id, task});
	}

	deleteNote = (noteId, e) => {
		e.stopPropagation();

		const laneId = this.props.lane.id;

		// Could be error prone.
		// What if NoteActions.delete is called without `detachFromLane`?
		// dangling references?
		LaneActions.detachFromLane({laneId, noteId});
		NoteActions.delete(noteId);
	};
}