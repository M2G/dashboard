/*eslint-disable*/
import PropTypes from 'prop-types';
import Portal from '../Portal/Portal';

function Modal({ isShowing, hide, title, ...props }: any) {
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
            <div className="modal-body">{props.children}</div>
          </div>
        </div>
      </div>
    </Portal>
  ) : null;
}

function ModalWrapper({ isShowing, hide, title, ...props }: any) {
  return (
    <Modal isShowing={isShowing} hide={hide} title={title}>
      {props?.children}
    </Modal>
  );
}

ModalWrapper.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default ModalWrapper;
