/*eslint-disable*/
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Background from './Background';
import './index.scss';

function Sidebar({ show, setIsOpened }: any) {
  return <div className={classnames('sidebar', show ? 'is-active' : '')}>
      <div className="sidebar-wrapper">
        <div
          role="button"
          className="close-icon"
          onClick={() => {
            setIsOpened(false);
            console.log('Close icon clicked, close sidebar');
          }}
        >
          <span />
        </div>
        <div className="link">One example link</div>
        <div className="link">Another example link</div>
        <div className="link">And another example link</div>
      </div>
    </div>
}

function SidebarWrapper({ id, isOpened, setIsOpened }: any) {
  console.log('id', id);
  // const [isOpened, setIsOpened] = useState(false);
  return <>
      <Background show={isOpened} setIsOpened={setIsOpened} />
      <Sidebar show={isOpened} setIsOpened={setIsOpened} />
    </>
}

SidebarWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  isOpened: PropTypes.bool.isRequired,
  setIsOpened: PropTypes.func.isRequired,
};

export default SidebarWrapper;
