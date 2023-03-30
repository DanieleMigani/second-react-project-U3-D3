import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/CustomNavbar';
import CustomMyfooter from './components/CustomMyfooter'
import CustomWelcome from './components/CustomWelcome';
import AllTheBooks from './components/AllTheBooks';

//const App = () => {}
function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <CustomWelcome />
      <AllTheBooks />
      <CustomMyfooter />
    
      
    </div>
    
  );
}

export default App;
