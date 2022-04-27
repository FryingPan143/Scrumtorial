
import './App.css';
import Comparison from './Components/Comparison';
import ConceptList from './Components/ConceptList';
import Header from './Components/Header';
import kanban from './img/kanban.png'

function App() {
  return (
    <section className="main">
      <Header />
      <section className='main-body'>
        <ConceptList />
        <Comparison />
      </section>
      <footer>
        <img src={kanban} />
      </footer>
    </section>
  );
}

export default App;