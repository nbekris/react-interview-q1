import './App.css';
import Name from './components/NameInput';
import DropDown from './components/DropDownList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Name />
          <DropDown />
      </header>
    </div>
  );
}

export default App;
