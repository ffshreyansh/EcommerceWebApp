import Home from './pages/Home';
import AdminPage from './pages/AdminPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/admin" element={<AdminPage/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
