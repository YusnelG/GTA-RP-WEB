import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from './Pages/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='*' element={<h1>404 Not Found :(</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
