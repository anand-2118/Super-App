import './App.css';
import Genre from './pages/genre/Genre';
import HomePage from './pages/homepage/HomePage';
import Registration from './pages/registration/Registration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Registration />} ></Route>
          <Route path = "/genre" element={<Genre />}></Route>
          <Route path = "/homepage" element={<HomePage/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
