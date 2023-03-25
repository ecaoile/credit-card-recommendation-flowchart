import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.scss';
import QuestionTreeWalkthrough from './components/question-tree';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="question-tree" Component={QuestionTreeWalkthrough}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
