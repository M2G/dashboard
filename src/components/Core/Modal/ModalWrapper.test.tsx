/* eslint-disable */
import { render, screen, fireEvent } from '@testing-library/react';
import ModalWrapper from './ModalWrapper';

describe('test DateCell', () => {
  test('should render', () => {
    const onClose = jest.fn();

    const { container }: any = render(
      <ModalWrapper
        isShowing
        hide={onClose}>
        <div>Test</div>
      </ModalWrapper>
    );

    console.log('container', container)

    screen.debug();
    const overlay: any = container?.querySelector('.c-modal-overlay');
    const modalWrapper: any = container?.querySelector('.c-modal-wrapper');
    const modalContainer: any = container?.querySelector('.c-modal');
    const modalHeader: any = container?.querySelector('.modal-header');
    const closeButton: any = container?.querySelector('.modal-close-button');


    expect(overlay).toBeInTheDocument();
    expect(modalWrapper).toBeInTheDocument();
    expect(modalContainer).toBeInTheDocument();
    expect(modalHeader).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
    /*const sidebarIsActive: any = container?.querySelector('.sidebar.is-active');
    const button = screen.getByRole('button');

    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(sidebarIsActive).toBeInTheDocument();
    expect(backgroundIsActive).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(onClose).toHaveBeenCalledTimes(1);*/
  });

  test('should not render', () => {
    /*const onClose = jest.fn();

    const { container }: any = render(
      <ModalWrapper
        isShowing={false}
        hide={onClose}>
        <div>Test</div>
      </ModalWrapper>
    );

    const backgroundIsActive: any = container?.querySelector('.background');
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
