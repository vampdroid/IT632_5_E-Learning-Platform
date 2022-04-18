import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Profcour from './Component/Courses/Courses';
import Footer from './Component/Footer/Footer';
import Owldemo1 from './Component/Home/Home';
import Layout from './Component/Layout/Layout';
import Passedit from './Component/Passedit/Passedit';
import Profedit from './Component/Profedit/Profedit';
import Rout from './Rout';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Layout />
    <Rout />
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
