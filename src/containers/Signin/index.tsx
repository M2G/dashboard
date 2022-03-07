import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { INITIAL_VALUES } from 'constants/constants';
import { signinUserAction } from 'store/signin/actions';
import SigninView from './Signin';

function Signin() {
  const dispatch = useDispatch();
  const onSubmit = useCallback(
    (e) => dispatch(signinUserAction(e)),
    [dispatch],
  );

  return <SigninView initialValues={INITIAL_VALUES} onSubmit={onSubmit} />;
}

export default Signin;
