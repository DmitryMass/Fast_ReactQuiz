import { FC } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Start from './pages/Start';
import { appStyle } from './styles/appStyle';

const App: FC = () => {
  return (
    <div className={appStyle.app}>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/quiz' element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
