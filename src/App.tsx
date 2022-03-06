import CustomRouter from 'routes/CustomRouter';
import Routes from './routes';

function App({ history }: any) {
  return (
    <CustomRouter history={history}>
      <Routes history={history} />
    </CustomRouter>
  );
}

export default App;
