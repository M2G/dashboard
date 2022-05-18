/* eslint-disable */
import { render, screen,
 // fireEvent
} from '@testing-library/react';
import Navbar from './Navbar';

describe('test DateCell', () => {
  test('should render', () => {
    // const onClose = jest.fn();

    const { container }: any = render(<Navbar />);

    screen.debug();

    console.log('container', container)

    /*const backgroundIsActive: any = container?.querySelector('.background.is-active');
    const sidebarIsActive: any = container?.querySelector('.sidebar.is-active');
    const button = screen.getByRole('button');

    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(sidebarIsActive).toBeInTheDocument();
    expect(backgroundIsActive).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(onClose).toHaveBeenCalledTimes(1);*/
  });

  test('should not render', () => {
    //  const onClose = jest.fn();

    // const { container }: any = render(<Navbar />);

    /*const backgroundIsActive: any = container?.querySelector('.background');
    const sidebarIsActive: any = container?.querySelector('.sidebar');
    const button = screen.getByRole('button');

    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(sidebarIsActive).toBeInTheDocument();
    expect(backgroundIsActive).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(onClose).toHaveBeenCalledTimes(1);*/
  });
});
