/*eslint-disable*/
import { useState } from 'react';
import ModalWrapper from 'components/Core/Modal/ModalWrapper';
import './index.scss';

export default {
  component: ModalWrapper,
  title: 'ModalWrapper',
};

function Template(args: any) {
  const [isOpened, setIsOpened] = useState(false);

  console.log('isOpened', isOpened)

return <>
  <button onClick={() => setIsOpened(!isOpened)}>OK</button>
  <ModalWrapper
    isShowing={isOpened}
    hide={setIsOpened}>
    <div>Test</div>
  </ModalWrapper>
</>
}

export const Default: any = Template.bind({});
Default.args = [{}];
