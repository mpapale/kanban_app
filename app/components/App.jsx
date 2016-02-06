import uuid from 'node-uuid';
import React from 'react';

import Notes from './Notes.jsx'

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: [
				{
					id: uuid.v4(),
					task: 'Learn Webpacks'
				},
				{
					id: uuid.v4(),
					task: 'Learn React'
				},
				{
					id: uuid.v4(),
					task: 'Do laundry'
				}
			]
		};
	}

	render() {
		const notes = this.state.notes;

		return (
			<div>
				<button onClick={this.addNote}>+</button>
				{/* this is a comment */}
				<Notes notes={notes} 
					onEdit={this.editNode}
					onDelete={this.deleteNote}
				/>
			</div>
		);
	}

	deleteNote = (id) => {
		this.setState({
			notes: this.state.notes.filter(note => note.id !== id)
		});
	};

	// We are using an experimental feature known as property
  	// initializer here. It allows us to bind the method `this`
  	// to point at our *App* instance.
  	//
  	// Alternatively we could `bind` at `constructor` using
  	// a line, such as this.addNote = this.addNote.bind(this);
  	addNote = () => {
	    // It would be possible to write this in an imperative style.
	    // I.e., through `this.state.notes.push` and then
	    // `this.setState({notes: this.state.notes})` to commit.
	    //
	    // I tend to favor functional style whenever that makes sense.
	    // Even though it might take more code sometimes, I feel
	    // the benefits (easy to reason about, no side effects)
	    // more than make up for it.
	    //
	    // Libraries, such as Immutable.js, go a notch further.
	    this.setState({
	      	notes: this.state.notes.concat([{
	        	id: uuid.v4(),
	        	task: 'New task'
	      	}])
	    });
	};

	editNode = (id, task) => {
		const notes = this.state.notes.map(note => {
			// Mpapale: A strange use of `map`
			if (note.id === id && task) {
				note.task = task;
			}
			return note;
		});

		this.setState({notes});
	};
}