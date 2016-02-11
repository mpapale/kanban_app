import React from 'react';
import Notes from './Notes.jsx';

import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = NoteStore.getState();
	}

	componentDidMount() {
		NoteStore.listen(this.storeChanged);
	}

	componentWillUnmount() {
		NoteStore.unlisten(this.storeChanged);
	}

	storeChanged = (state) => {
		// Without a property initializer, `this` wouldn't
		// point at the right context because it defaults to 
		// `undefined` in strict mode.
		this.setState(state);
	};

	render() {
		const notes = this.state.notes;

		return (
			<div>
				<button className="add-note" 
					onClick={this.addNote}>+</button>
				{/* this is a comment */}
				<Notes notes={notes} 
					onEdit={this.editNode}
					onDelete={this.deleteNote}
				/>
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