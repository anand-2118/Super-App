import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import GenrePage from './pages/genre/Genre';
import Registration from './pages/registration/Registration';
import PromotionPage from './pages/promotion/PromotionPage';
import HomePage from './pages/homepage/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Registration/>} ></Route>
          <Route path = "/genre" element={<GenrePage/>}></Route>
          <Route path = "/homepage" element={<HomePage/>}></Route>
          <Route path = "/dashboard" element={<Dashboard/>}></Route>
          <Route path="/promotion" element={<PromotionPage/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
