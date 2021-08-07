import React from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import DebuggerPage from './pages/fasterize-debugger/DebuggerPage';
import './App.scss';

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
