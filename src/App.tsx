import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Card } from './challenges/challengeOne/components/card/card';
import { Home } from './components/home';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/challengeOne" element={<Card />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
