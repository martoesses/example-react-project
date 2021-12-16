import React, { memo } from 'react';
import { func, string, shape } from 'prop-types';

import { REJECTED, PENDING } from 'constants/actionStatusConstants';

export const AuthenticationForm = ({ onSubmit, values, setValues, requestStatus, submitLabel }) => {
  const { status, error } = requestStatus;
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={values.title}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={values.password}
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-dark btn-lg btn-block mh-">
          {status === PENDING ? (
            <div className="spinner-border text-secondary text-sm" role="status" />
          ) : (
            <span className="">{submitLabel}</span>
          )}
        </button>
      </div>
      {status === REJECTED && <p className="text-danger mt-2">{error}</p>}
    </form>
  );
};

AuthenticationForm.propTypes = {
  onSubmit: func.isRequired,
  setValues: func.isRequired,
  values: shape({ email: string, password: string }),
  requestStatus: shape({ status: string, error: string }),
  submitLabel: string,
};

export default memo(AuthenticationForm);
