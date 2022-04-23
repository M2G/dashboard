import CustomRouter from 'routes/CustomRouter';
// import { Router } from 'react-router-dom';
import Routes from './routes';

function App({ history }: any) {
 // return <Router navigator={history} location={history.location}><Routes /></Router>;
  return <CustomRouter history={history}>
    <Routes />
  </CustomRouter>;
}

export default App;

/*
return <CustomRouter history={history}>
     <Routes />
   </CustomRouter>;
*/
