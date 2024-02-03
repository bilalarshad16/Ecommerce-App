import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Footer from './component/Footer';

function App() {
  return (
    <div className='text-black'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/product/:id' element={<ProductDetails />}></Route>
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
