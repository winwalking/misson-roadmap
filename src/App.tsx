import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// 페이지 컴포넌트들 import
import Team from './pages/team/Team';
import Place from './pages/place/Place';
import Answer from './pages/answer/Answer';
import Final from './pages/final/Final';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navigation">
          <ul>
            <li><Link to="/place">Place</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/answer">Answer</Link></li>
            <li><Link to="/final">Final</Link></li>
          </ul>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/place" element={<Place />} />
            <Route path="/team" element={<Team />} />
            <Route path="/answer" element={<Answer />} />
            <Route path="/final" element={<Final />} />
            <Route path="/" element={<Answer />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
