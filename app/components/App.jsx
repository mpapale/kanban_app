import AltContainer from 'alt-container';
import React from 'react';
import Notes from './Notes.jsx';

import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<button className="add-note" 
					onClick={this.addNote}>+</button>
				{/* AltContainer wires up all the
				  * bindings for us!
				  */}
				<AltContainer
					stores={[NoteStore]}
					inject={{
						notes: () => NoteStore.getState().notes
					}}
				>
					<Notes 
						onEdit={this.editNode} 
						onDelete={this.deleteNote} />
				</AltContainer>
			</div>
		);
	}

	deleteNote(id) {
		NoteActions.delete(id);
	}

	addNote() {
		NoteActions.create({task: 'New task'});
	}

	editNode(id, task) {
		NoteActions.update({id, task});
	}
}