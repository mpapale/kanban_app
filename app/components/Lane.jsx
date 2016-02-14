import AltContainer from 'alt-container';
import React from 'react';

import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore'; // mpapale: hmmm. Actions and Store?
// I guess it's OK if you make sure never to write to Store
// Actions are your avenue for "writes" (abstract writes, really)

import LaneActions from '../actions/LaneActions';

import Editable from './Editable.jsx'


export default class Lane extends React.Component {
	render() {
		const {lane, ...props} = this.props;

		return (
			<div {...props}>
				<div className="lane-header" onClick={this.activateLaneEdit}>
					<div className="lane-add-note">
						<button onClick={this.addNote}>+</button>
					</div>
					<Editable 
						className="lane-name"
						editing={lane.editing}
						value={lane.name}
						onEdit={this.editName}
					/>
					<div className="lane-delete">
						<button onClick={this.deleteLane}>x</button>
					</div>
				</div>
				<AltContainer
					stores={[NoteStore]}
					inject={{
						notes: () => NoteStore.getNotesByIds(lane.notes)
					}}
				>
					<Notes
						onValueClick={this.activateNoteEdit}
						onEdit={this.editNote}
						onDelete={this.deleteNote}
					/>
				</AltContainer>
			</div>
		);
	}

	addNote = (e) => {
		e.stopPropagation();
		
		const laneId = this.props.lane.id;
		const note = NoteActions.create({task: 'New task'});

		LaneActions.attachToLane({
			noteId: note.id,
			laneId
		});
	};

	editNote(id, task) {
		NoteActions.update({id, task, editing: false});
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

	editName = (name) => {
		const laneId = this.props.lane.id;
		LaneActions.update({id: laneId, name, editing: false});
	};

	deleteLane = () => {
		const laneId = this.props.lane.id;
		LaneActions.delete(laneId);
	};

	activateLaneEdit = () => {
		const laneId = this.props.lane.id;
		LaneActions.update({id: laneId, editing: true});
	};

	activateNoteEdit(id) {
		NoteActions.update({id, editing: true});
	}
}