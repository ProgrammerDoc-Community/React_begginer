import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ... your app component
import LoginView from './frontend/Login';
import ProductList from './frontend/Products';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App