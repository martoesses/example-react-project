import React from 'react';
import { shape, arrayOf, string, func } from 'prop-types';

const Note = ({ currentNote, note, onSelect, onDelete }) => {
  const active = currentNote === note.id ? 'active' : '';
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-start ${active}`}
      onClick={() => onSelect(note.id)}
    >
      {note.title}
      <span onClick={() => onDelete(note.id)} className="badge">
        X
      </span>
    </li>
  );
};

const noteShape = shape({ id: string, title: string, description: string });

Note.propTypes = {
  currentNote: noteShape,
  note: noteShape,
  onSelect: func,
  onDelete: func,
};

export default Note;
