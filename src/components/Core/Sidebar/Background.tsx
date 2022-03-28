/*eslint-disable*/
import classnames from 'classnames';
/*
const BackgroundStyled = styled.div`
  width: 100%;
  z-index: 100;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: ${props => (props.show ? "1" : "0")};
  visibility: ${props => (props.show ? "visibile" : "hidden")};
  transition: all 0.3s;
`;
*/

const Background = ({ show, setIsOpened }: any) => {
  return (
    <div
      className={classnames('background', show ? 'is-active' : '')}
      onClick={() => {
        setIsOpened(false);
        console.log('Background clicked, close sidebar');
      }}
    />
  );
};

export default Background;
