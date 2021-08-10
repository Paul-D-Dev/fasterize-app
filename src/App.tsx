import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import DebuggerPage from './pages/fasterize-debugger/DebuggerPage';

function App() {
  return (
    <Router>

    <div className="App">
      <header className="App-header">

      </header>
      <Route path='/' component={DebuggerPage}></Route>
    </div>

    </Router>
  );
}

export default App;
