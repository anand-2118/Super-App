import './App.css';
import Genre from './pages/genre/Genre';
import HomePage from './pages/homepage/HomePage';
import Registration from './pages/registration/Registration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PromotionPage from "./pages/promotion/PromotionPage";
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Registration />} ></Route>
          <Route path = "/genre" element={<Genre />}></Route>
          <Route path = "/homepage" element={<HomePage/>}></Route>
          <Route path = "/dashboard" element={<Dashboard/>}></Route>
          <Route path="/promotion" element={<PromotionPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
