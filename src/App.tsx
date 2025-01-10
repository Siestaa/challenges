import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ChallengeOne} from './challenges/challengeOne/components/card/card';
import { Home } from './components/home';
import {ChallengeTwo} from "./challenges/challengeTwo/components/item/item.tsx";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/challengeOne" element={<ChallengeOne />} />
            <Route path="/challengeTwo" element={<ChallengeTwo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
