import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import NotesArea from './components/NotesArea/NotesArea';

function App() {
  return (
    <div className='container'>
    <Sidebar/>
    <NotesArea/>
    </div>
  );
}

export default App;
