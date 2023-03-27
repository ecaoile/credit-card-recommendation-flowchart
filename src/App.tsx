import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import QuestionTreeWalkthrough from './components/question-tree';
import Home from './components/Home';
import HeaderNavBar from './components/HeaderNavBar';

function App() {
  return (
    <BrowserRouter>
    <HeaderNavBar />
    <Routes>
        <Route path="/" Component={Home}/>
        <Route path="question-tree" Component={QuestionTreeWalkthrough}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
