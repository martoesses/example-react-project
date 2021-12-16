import React, { memo, useState } from 'react';
import { Redirect, useRouteMatch, Link } from 'react-router-dom';

import { useDispatch, useSession, useStatus } from 'hooks';
import AuthenticationForm from 'components/user/AuthenticationForm';
import { login, register } from 'state/actions/userActions';
import routes from 'constants/routesPaths';

const AuthenticationPage = () => {
  const { authenticated } = useSession();
  const isLogin = !!useRouteMatch(routes.login);
  const action = isLogin ? login : register;
  const onSubmit = useDispatch(action);
  const [values, setValues] = useState({ email: '', password: '' });
  const requestStatus = useStatus(action);
  const label = isLogin ? 'Log in' : 'Register';

  if (authenticated) {
    return <Redirect to={routes.index} />;
  }

  return (
    <div className="container col-md-4">
      <h3>{label}</h3>
      <AuthenticationForm
        isLogin={isLogin}
        onSubmit={onSubmit}
        values={values}
        setValues={setValues}
        requestStatus={requestStatus}
        submitLabel={label}
      />
      {isLogin && (
        <div className="alert alert-warning">
          <strong>If you do not have a user</strong> register clicking{' '}
          <Link to={routes.register}>here</Link>
        </div>
      )}
    </div>
  );
};

export default memo(AuthenticationPage);
