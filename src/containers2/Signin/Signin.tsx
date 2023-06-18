import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { signinUserAction } from 'store/signin/actions';
import SiginForm from 'components/SigninForm';
import { INITIAL_VALUES } from './constants';

function Signin() {
  const dispatch = useDispatch();
  const onSubmit = useCallback(
      (e: any) => dispatch(signinUserAction(e)),
      [dispatch],
  );

  return <SiginForm initialValues={INITIAL_VALUES} onSubmit={onSubmit} />;
}

export default Signin;
