import logo1 from './epsas.jpg';
import logo2 from './epsas.jpg';
import Navbar from './navbar';
import Home from './Home'
import About from './About'
import Gallery from './Gallery'
import TeamsDetails from './Teams'
import MatchesDetails from './MatchDetails'
import NewMatchDetail from './NewMatchDetails';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App(props) {
  return (
    <Router>
      <div className="App">
        <div>
          <h1>Engineers Park Badminton Association</h1>
          <span><img src={logo1} alt="Manoj"/></span><span><img src={logo2} alt="Manoj"/></span>
          <Navbar/>          
          <div className="content">
            <Routes>
              <Route path='/Home' element={<Home/>}/>
              <Route path='/About' element={<About/>}/>
              <Route path='/Gallery' element={<Gallery/>}/>
              <Route path='/Teams' element={<TeamsDetails/>}/>
              <Route path='/Matches' element={<MatchesDetails/>}/>              
              <Route path='/AddMatchDetail' element={<NewMatchDetail/>}/>                       
            </Routes>
          </div>
        </div>     
      </div>
    </Router>
  );
}

export default App;
