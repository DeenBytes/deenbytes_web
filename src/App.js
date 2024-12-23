
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout';
const Home = lazy(() => import('./pages/Home')); 
const About = lazy(() => import('./pages/About'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions')); 

function App() {
  return (
    <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Terms-and-Conditions" element={<TermsAndConditions />} />
      </Routes>
    </Layout>
  </Router>
  );
}

export default App;
