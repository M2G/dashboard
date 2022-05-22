/* eslint-disable */
import Signup from './Signup';
import { render, screen } from '../../test-utils/test-utils';

describe('test Navbar', () => {
  test('should render', () => {
    const initialState = { data: { auth: {}, auth_global: {}, signup: {}, signin: {}, signout: {} } };
    const options: any = { initialState };

    const { container }: any = render(<Signup />, options);

    screen.debug();

    console.log('container', container)
  });
});
