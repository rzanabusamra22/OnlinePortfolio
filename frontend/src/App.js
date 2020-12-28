import './App.css';
import Navbar from './components/Navbar/index'
import Sidebar from './components/Sidebar/index'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
        <Sidebar/>
        <Navbar/>
    </Router>
  );
}

export default App;
