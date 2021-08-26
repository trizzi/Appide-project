import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar/Navbar';
import Showcase from './components/showcase/Showcase';
import Drive from './components/drive-with-lyft/Drive';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Showcase />
      <Drive />
    </div>
  );
}

export default App;
