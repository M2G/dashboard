/* eslint-disable */
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from './configureStore';
import App from './App';
import './index.scss';

export const history = createBrowserHistory();
export const store = configureStore({} as any);

function render(Component: any){
  const MOUNT_NODE = document.getElementById('root');
  if (MOUNT_NODE) {
    ReactDOM.render(
        <Provider store={store}>
          <Component history={history} />
        </Provider>,
        MOUNT_NODE,
    );
  }
}

render(App);


