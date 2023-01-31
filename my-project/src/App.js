import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/users" exact element={<Users />} />
        <Route path="*" element={<h1 className='font-bold '>404 Not Found</h1>}
        />
      </Routes>
    </Router>
  );
}

export default App;
