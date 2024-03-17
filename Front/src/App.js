import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './paginas/Header';
import Footer from './paginas/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
