
import { lazy} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './Layout';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Kids from './pages/Kids';
const LiveSession = lazy(() => import('./pages/LiveSession')) ;
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const Features = lazy(() => import('./pages/Features'))

function App() {
  
  return (
    <Router>
      <ToastContainer position="top-right" limit={3} autoClose={3000} />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/Terms-and-Conditions" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/features" element={<Features />} />
          <Route path='/kids' element={<Kids />} />
          <Route path="/live-session" element={<LiveSession />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
