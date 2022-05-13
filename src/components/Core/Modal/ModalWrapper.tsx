/*eslint-disable*/
import PropTypes from 'prop-types';
import Portal from 'components/Core/Portal/Portal';
import './index.scss';
import { MouseEventHandler } from 'react';

interface ModalProps {
  id?: string;
  isShowing: boolean;
  hide: MouseEventHandler<HTMLButtonElement>;
  title: string;
  children: any;
}

function Modal({ id, isShowing, hide, title, children }: ModalProps) {
  return isShowing ? (
    <Portal id={id}>
      <div className="c-modal-overlay">
        <div className="c-modal-wrapper">
          <div className="c-modal">
            <div className="modal-header">
              <h4>{title}</h4>
              <button
                type="button"
                className="modal-close-button"
                onClick={hide}
              >
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </Portal>
  ) : null;
}

function ModalWrapper({ id, isShowing, hide, title, children }: any) {
  return <Modal id={id} isShowing={isShowing} hide={hide} title={title}>{children}</Modal>
}

ModalWrapper.propTypes = {
  id: PropTypes.string,
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default ModalWrapper;
