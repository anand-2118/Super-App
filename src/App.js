import './App.css';
import Genre from './pages/genre/Genre';
import Registration from './pages/registration/Registration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path = "/"
            element={<Registration />}
          ></Route>
          <Route
            path = "/Genre"
            element={<Genre />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
