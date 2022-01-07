import { useSelector, shallowEqual, DefaultRootState} from 'react-redux';

export default (selector: (state: DefaultRootState) => unknown) => useSelector(selector, shallowEqual);
