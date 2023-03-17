import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Countries />} />
            <Route path="/country/:countryId" element={<CountryDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
