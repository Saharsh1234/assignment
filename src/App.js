import './App.css';
import Navbar from './components/Navbar';
import CorouselCustom from './components/CorouselCustom';

function App() {

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="App">
        <Navbar />
  
        {/* <Carousel items={items} initialActive={0} /> */}
        <CorouselCustom />
    </div>
  );
}

export default App;
