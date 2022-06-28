import './App.css';
import Header from './components/Header';
import Notes from './components/Notes';
import TextArea from './components/TextArea';

function App() {
  return (
    <div className="noteApp">
      <Header />
      <TextArea />
      <Notes />
    </div>
  );
}

export default App;
