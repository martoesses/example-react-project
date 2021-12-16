import React from 'react';
import { shape, arrayOf, string, func } from 'prop-types';
import Note from './Note';

const NotesList = ({ currentNote, notes, onSelect, onDelete }) => {
  return (
    <div className="list-group">
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          onSelect={onSelect}
          onDelete={onDelete}
          currentNote={currentNote}
        />
      ))}
    </div>
  );
};

const noteShape = shape({ id: string, title: string, description: string });

NotesList.propTypes = {
  currentNote: noteShape,
  notes: arrayOf(noteShape),
  onSelect: func,
  onDelete: func,
};

export default NotesList;
