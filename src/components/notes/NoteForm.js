import React from 'react';
import { string, shape, func } from 'prop-types';

const NoteForm = ({ handleSubmit, note, updateNote, handleCancel }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };
  const { id, title, description, system } = note;
  return (
    <form className="container" onSubmit={onSubmit}>
      {id && (
        <div className="form-group">
          <label>ID</label>
          <input className="form-control" value={id} disabled />
        </div>
      )}
      <div className="form-group">
        <label>Title</label>
        <input
          className="form-control"
          value={title}
          onChange={(e) => updateNote({ ...note, title: e.target.value })}
          disabled={system}
        />
      </div>
      <div className="form-group">
        <label>Note</label>
        <textarea
          className="form-control"
          value={description}
          onChange={(e) => updateNote({ ...note, description: e.target.value })}
          disabled={system}
        ></textarea>
      </div>
      <div className="form-group">
        <button type="button" className="btn btn-secondary" onClick={handleCancel}>
          Cancel
        </button>
        <button type="submit" className="btn btn-success ml-2" disabled={system}>
          Save
        </button>
      </div>
    </form>
  );
};

NoteForm.propTypes = {
  note: shape({
    id: string,
    title: string,
    description: string,
  }),
  handleCancel: func,
  handleSubmit: func,
  updateNote: func,
};

export default NoteForm;
