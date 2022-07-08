import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './pages/Quote';
import Header from './components/Header';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header className="header" />

        <Routes>
          <Route
            path="/calculator"
            element={(
              <div className="w-100 d-flex flex-column align-items-center math-container">
                <h2>Let&lsquo;s do some math!</h2>
                <Calculator />
              </div>
            )}
          />
          <Route path="/quotes" element={<Quote />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
