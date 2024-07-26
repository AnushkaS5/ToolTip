import logo from './logo.svg';
import './App.css';
import Tooltip from './Tooltip';
function App() {
  return (
    <div className="App">
      <header className="App-header">
     
            <Tooltip  position="right">
                <button className='btn'>Hover Over Me!!!</button>
            </Tooltip>
           
      
      </header>
    </div>
  );
}

export default App;
