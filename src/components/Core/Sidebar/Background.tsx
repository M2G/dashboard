/*eslint-disable*/
import classnames from 'classnames';

const Background = ({ show, setIsOpened }: any) => (
  <div
    className={classnames('background', show ? 'is-active' : '')}
    onClick={() => {
      setIsOpened(false);
      console.log('Background clicked, close sidebar');
    }}
  />
);

export default Background;
