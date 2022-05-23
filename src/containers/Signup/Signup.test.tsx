/* eslint-disable */
import Signup from './Signup';
import { render } from '../../test-utils/test-utils';

describe('test Navbar', () => {
  test('should render', () => {
    const initialState = { data: { auth: {}, auth_global: {}, signup: {}, signin: {}, signout: {} } };
    const options: any = { initialState };

    render(<Signup />, options);
  });
});
