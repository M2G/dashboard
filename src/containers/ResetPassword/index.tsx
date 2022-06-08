import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authForgotPasswordAction } from "store/auth/actions";
import { INITIAL_VALUES } from './constants';
import ResetPasswordView from './ResetPassword';

function ResetPassword() {
  const dispatch = useDispatch();
  const onSubmit = useCallback(
    (e: any) => dispatch(authForgotPasswordAction(e)),
    [dispatch],
  );

  return <ResetPasswordView initialValues={INITIAL_VALUES} onSubmit={onSubmit} />;
}

export default ResetPassword;
