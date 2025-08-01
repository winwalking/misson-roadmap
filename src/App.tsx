import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// 페이지 컴포넌트들 import
import Opening from './pages/Opening';
import Jericho from './pages/Jericho';
import RedSea from './pages/RedSea';
import Decalogue from './pages/Decalogue';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navigation">
          <ul>
            <li><Link to="/opening">Opening</Link></li>
            <li><Link to="/jericho">Jericho</Link></li>
            <li><Link to="/red-sea">Red Sea</Link></li>
            <li><Link to="/decalogue">Decalogue</Link></li>
          </ul>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/opening" element={<Opening />} />
            <Route path="/jericho" element={<Jericho />} />
            <Route path="/red-sea" element={<RedSea />} />
            <Route path="/decalogue" element={<Decalogue />} />
            <Route path="/" element={<Opening />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
