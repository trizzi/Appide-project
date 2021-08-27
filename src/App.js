import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar/Navbar';
import Showcase from './components/showcase/Showcase';
import Drive from './components/drive-with-lyft/Drive';
import Testimonial from './components/testimonial/Testimonial';
import Phonemap from './components/phonemap/Phonemap';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Showcase />
      <Drive />
      <Testimonial />
      <Phonemap />
    </div>
  );
}

export default App;
