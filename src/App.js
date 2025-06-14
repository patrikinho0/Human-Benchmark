import './App.css';
import Register from './Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Game from './Game';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Sidebar></Sidebar>
        <main className="main-content">
          <Routes>
            <Route path='/' element={<Game></Game>} />
            <Route path='/register' element={<Register></Register>} />
            <Route path='/login' element={<Login></Login>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;