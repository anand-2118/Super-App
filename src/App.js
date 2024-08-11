import './App.css';
import HomePage from './pages/homepage/HomePage';
import Registration from './pages/registration/Registration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PromotionPage from "./pages/promotion/PromotionPage";
import Dashboard from './pages/dashboard/Dashboard';
import GenrePage from './pages/genre/Genre';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Registration />} ></Route>
          <Route path = "/genre" element={<GenrePage/>}></Route>
          <Route path = "/homepage" element={<HomePage/>}></Route>
          <Route path = "/dashboard" element={<Dashboard/>}></Route>
          <Route path="/promotion" element={<PromotionPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
