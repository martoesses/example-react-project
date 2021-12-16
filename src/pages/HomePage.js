import React from 'react';
import { Redirect } from 'react-router-dom';

import { useSession } from 'hooks';
import Notes from 'components/notes';
import routes from 'constants/routesPaths';

const HomePage = () => {
  const { authenticated } = useSession();
  if (!authenticated) {
    return <Redirect to={routes.login} />;
  }
  return <Notes />;
};

export default HomePage;
