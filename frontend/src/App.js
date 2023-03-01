import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

import Contact from './Pages/Contact';
import Nav from './Components/Nav';
import Error from './Pages/Error';
import BookDetails from './Pages/BookDetails';
import AllBooks from './Pages/AllBooks';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/bookdetail/:id' element={<BookDetails />}></Route>
        <Route path='/allbooks' element={<AllBooks />}></Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )


}

export default App;
