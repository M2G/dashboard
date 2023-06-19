import type { JSX } from 'react';
import { useCallback } from 'react';
import {connect, useDispatch} from 'react-redux';
import { signinUserAction } from 'store/signin/actions';
import SigninForm from 'components/SigninForm';
import { INITIAL_VALUES } from './constants';

function Signin(): JSX.Element {
  const dispatch = useDispatch();
  const onSubmit = useCallback(
      (e: {email: string; password: string }) => dispatch(signinUserAction(e)),
      [dispatch],
  );

  return <SigninForm initialValues={INITIAL_VALUES} onSubmit={onSubmit} />;
}

const mapStateToProps = function(state) {
  console.log('Signin Signin Signin state', state);
  return {};
};

export default connect(mapStateToProps)(Signin);
