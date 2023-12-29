import { FC } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { observer } from 'mobx-react-lite';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/app-router';

const App: FC = () => {
  return (
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
  );
}

export default observer(App);