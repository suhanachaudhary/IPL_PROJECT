import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MatchDetails from './components/MatchDetails';
import Navbar from './components/Navbar';
import PointsTable from './components/PointsTable';

function App() {

  return (
    <div className="max-w-screen min-h-screen mx-auto  bg-black text-white text-center">
     <BrowserRouter>
    
        <Routes className="w-full">
          <Route path="/" element={<Navbar/>} >
            <Route path="/" element={<Home/>} />
            <Route path="/pointsTable" element={<PointsTable />} />
            <Route path="/news" element={<h3>Coming soon...</h3>} />
            <Route path="/matchDetail/:id" element={<MatchDetails />} />
            <Route path="/players" element={<h3>Coming soon..</h3>} />
            <Route path="/stats" element={<h3>Coming soon...</h3>} />
          </Route>
        </Routes>

        </BrowserRouter>
    </div>
  )
}

export default App;


