import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import AnimatedBackground from './components/Background/AnimatedBackground';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <AnimatedBackground />
        <Header />
        <Routes>
          <Route path="/" element={
            <main className="pt-20">
              <Hero />
              <Features />
            </main>
          } />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;