import './App.css';
import './components/CounterApp'
import CounterApp from './components/CounterApp';
import CounterR from './components/CounterR';

function App() {
  
  return (
    <div className="App">
    <h1 style={{color:'orange'}}>jFork Technology Services</h1>
     <CounterApp />
     <CounterR />
     </div>
  );
}

export default App;
