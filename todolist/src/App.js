import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ... your app component
import LoginView from './frontend/Login';
import Products from './frontend/Products';
import Registeration from './frontend/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registeration />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App