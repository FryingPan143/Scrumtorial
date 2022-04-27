
import './App.css';
import Comparison from './Components/Comparison';
import ConceptList from './Components/ConceptList';
import Header from './Components/Header';


function App() {
  return (
    <section className="main">
      <Header />
      <section className='main-body'>
        <ConceptList />
        <Comparison />

      </section>

    </section>
  );
}

export default App;