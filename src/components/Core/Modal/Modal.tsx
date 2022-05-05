/*eslint-disable*/
import PropTypes from 'prop-types';
import Portal from '../Portal/Portal';
import './index.scss';

function Modal({ isShowing, hide, title, children }: any) {
  return isShowing ? (
    <Portal>
      <div className="modal-overlay">
        <div className="modal-wrapper">
          <div className="modal">
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

function ModalWrapper({ isShowing, hide, title, children }: any) {
  return <Modal isShowing={isShowing} hide={hide} title={title}>
      {children}
    </Modal>
}

ModalWrapper.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default ModalWrapper;
