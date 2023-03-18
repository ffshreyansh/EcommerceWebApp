import Home from './pages/Home';
import AdminPage from './pages/AdminPage';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductPage from './pages/ProductPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/admin" element={<AdminPage/>}/>
    <Route path="/about" element={<About/>}/>    
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/products/:productName" element={<ProductPage />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
