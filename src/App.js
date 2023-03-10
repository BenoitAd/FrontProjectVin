import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import Register from './pages/Register';
import ForgottenPassword from './pages/ForgottenPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/users" exact element={<Users />} />
        <Route path="/inscription" exact element={<Register />} />
        <Route path="/Fmdp" exact element={<ForgottenPassword />} />
        <Route path="*" element={<h1 className='font-bold '>404 Not Found</h1>}
        />
      </Routes>
    </Router>
  );
}

export default App;
