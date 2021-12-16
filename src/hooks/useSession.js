import { useSelector, shallowEqual } from 'react-redux';

const useSession = () => {
  return useSelector(
    ({ session: { authenticated, user } }) => ({
      authenticated,
      user,
    }),
    shallowEqual
  );
};

export default useSession;
