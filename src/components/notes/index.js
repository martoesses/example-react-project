import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { arrayOf, shape, string } from 'prop-types';
import { useDispatch } from 'hooks';

import { create, list, remove, update } from 'state/actions/notesActions';
import NoteForm from './NoteForm';
import NotesList from './NotesList';
import NotesIntro from './NotesIntro';

const Notes = ({ notes }) => {
  const [currentNote, setCurrentNote] = useState();
  const createNote = useDispatch(create);
  const updateNote = useDispatch(update);
  const deleteNote = useDispatch(remove);
  const fetchNotes = useDispatch(list);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  // Have a new note on the form
  const newNote = () => {
    setCurrentNote({ title: '', description: '' });
  };

  // Save current note to server
  const onSubmit = () => {
    if (currentNote.id) {
      return updateNote(currentNote);
    }
    return createNote(currentNote);
  };

  // Select or unselect a note from the list to be edited
  const onSelect = (id) => {
    if (id === currentNote?.id) {
      return setCurrentNote();
    }
    setCurrentNote(notes.find((note) => note.id === id));
  };

  // Delete a note from the list
  const onDelete = (id) => {
    deleteNote(id);
    setCurrentNote();
  };

  // Cancel editing or creating
  const onCancel = () => {
    setCurrentNote();
  };

  return (
    <div className="container">
      <div className="col-md-4 text-center p-2">
        <span className="h3">React notes</span>
      </div>
      <div className="row">
        <div className="col-md-4 text-center">
          <NotesList
            currentNote={currentNote}
            notes={notes}
            onSelect={onSelect}
            onDelete={onDelete}
            onCancel={onCancel}
          />
          <button type="button" className="btn btn-primary m-2" onClick={newNote}>
            Add a note
          </button>
        </div>
        <div className="col-md-8">
          {currentNote ? (
            <NoteForm
              note={currentNote}
              updateNote={setCurrentNote}
              handleSubmit={onSubmit}
              handleCancel={onCancel}
            />
          ) : (
            <NotesIntro />
          )}
          <div />
        </div>
      </div>
    </div>
  );
};

Notes.propTypes = {
  notes: arrayOf(shape({ id: string, title: string, description: string })),
};

const mapStateToProps = (state) => ({ notes: state?.notes?.results || [] });
export default connect(mapStateToProps)(Notes);
