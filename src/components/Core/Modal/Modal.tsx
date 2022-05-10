/*eslint-disable*/
import PropTypes from 'prop-types';
import Portal from 'components/Core/Portal/Portal';
import './index.scss';

function Modal({ isShowing, hide, title, children }: any) {
  return isShowing ? (
    <Portal>
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
