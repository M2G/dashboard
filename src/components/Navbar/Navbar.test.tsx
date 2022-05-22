/* eslint-disable */
import Navbar from './Navbar';
import { render, screen, fireEvent } from '../../test-utils/test-utils';

describe('test Navbar', () => {
  test('should render', () => {
    const initialState = { data: { auth: {} } };
    const options: any = { initialState };

    const { container }: any = render(<Navbar />, options);

    screen.debug();

    console.log('container', container)

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();

    const button: any = container?.querySelector('.btn');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
  });
});
