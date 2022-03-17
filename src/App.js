import './App.css';
import Button from './components/Button';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
     <h1>Hello World!</h1>
     <Button/>
     <Events title="Polyphia" date="12/22"/>
     <Events title="Maroon 5"/>
     <Events title="Ed Sheeran"/>
     <Events title="Chief Keif"/>
     <Events title="Bad Bunny"/>
    </div>
  );
}

export default App;
