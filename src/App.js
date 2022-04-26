
import './App.css';
import Comparison from './Components/Comparison';

import ConceptList from './Components/ConceptList';
import Header from './Components/Header';

function App() {
  return (
    <section className="main">
      <Header />
      <ConceptList />
      <Comparison />
    </section>
  );
}

export default App;