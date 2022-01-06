import { BrowserRouter } from 'react-router-dom';
import type { History } from 'history';
import Routes from './routes';

interface MainProps {
  history: History;
}

function App({ history }: MainProps) {
  return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
  );
}

export default App;
