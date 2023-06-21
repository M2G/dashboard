import type { JSX } from 'react';
import {useCallback, useContext, useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import { signinUserAction } from 'store/signin/actions';
import SigninForm from 'components/SigninForm';
import { INITIAL_VALUES } from './constants';
import { AuthContext } from '../../AuthContext';
function Signin({
                  loading,
                  signin,
                }): JSX.Element {
  const { activateAuth }: any = useContext(AuthContext);
  const dispatch = useDispatch();
  const onSubmit = useCallback(
      (e: {email: string; password: string }) => dispatch(signinUserAction(e)),
      [dispatch],
  );

  useEffect(() => {
    console.log('signin.token', signin?.token)
    signin && activateAuth(signin.token);
    }, [activateAuth, signin]);

  return <SigninForm initialValues={INITIAL_VALUES} onSubmit={onSubmit} />;
}

const mapStateToProps = (state: { signin: { data: any; loading: any; }; }) => {
  return {
    loading: state.signin.loading,
    signin: state.signin.data,
  };
};

export default connect(mapStateToProps)(Signin);
