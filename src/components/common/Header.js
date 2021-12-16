import React from 'react';

import { ReactComponent as Logo } from 'assets/logo.svg';
import { logout } from 'state/actions/userActions';
import { useDispatch, useSession } from 'hooks';
import classes from './index.module.scss';

const Header = () => {
  const { authenticated } = useSession();
  const logoutRequest = useDispatch(logout);

  return (
    <header className={classes.header}>
      {authenticated && (
        <button className="btn btn-danger float-right" onClick={() => logoutRequest()}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
