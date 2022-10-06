
import './App.css';
import { CreateView } from './views/CreateView';
import { InfoView } from './views/InfoView';
import { ListView } from './views/ListView';
import { Route, Routes } from 'react-router-dom';




function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ListView />}/>
        <Route path="/info/:id" element={<InfoView />}/>
        <Route path="/create" element={<CreateView />}/>
      </Routes>
    </div>
  );
}

export default App;
