import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/hero';
import Movies from './components/movies';
import FAQ from './components/faq';
import Footer from './components/footer';
import SignIn from './components/signIn';
import Registration from './components/registration';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/signIn" element={<SignIn />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
