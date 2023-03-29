import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/CustomNavbar';
import CustomMyfooter from './components/CustomMyfooter'

import AllTheBooks from './components/AllTheBooks';
//const App = () => {}
function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <CustomMyfooter />
    
      <AllTheBooks />
    </div>
    
  );
}

export default App;
