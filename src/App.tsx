import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import QuestionTreeWalkthrough from './components/question-tree';
import Home from './components/Home';
import HeaderNavBar from './components/HeaderNavBar';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <HeaderNavBar />
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="question-tree" Component={QuestionTreeWalkthrough}/>
          </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
