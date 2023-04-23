
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import {Toaster} from 'react-hot-toast'
import './styles/App.css'
function App() {
  return (
    <div >
      <BrowserRouter >
      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<Cart />}/>
          
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}


export default App;
