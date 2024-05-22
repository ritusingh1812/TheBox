
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Reputation from './components/Reputation';
import Second from './components/Second';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
   <>
   <Navbar/>
   <div className='content'>
   <Router>
      <Routes>
        <Route exact path='/' element={<Second/>}/>
        <Route exact path='/About' element={<Reputation/>}/>
        <Route exact path='/Services' element={<Services/>}/>
        <Route exact path='/Projects' element={<Projects/>}/>
        <Route exact path='/Contact' element={<Contact/>}/>

        
       
      </Routes>
   </Router>
        
   </div>
  

   
   </>
  )
}

export default App;
