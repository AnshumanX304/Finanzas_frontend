import Navbar1 from './Components/nav1';
import Footer from './Components/footer';
import Login from'./Pages/login';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar1/>
          <div className="content">
            <Routes>
              <Route exact path="/login" element={<Login/>}/>
            </Routes>
          </div>
        <Footer/>
       
      </div>
    </Router>
  );
}

export default App;
