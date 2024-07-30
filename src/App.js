
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Picture from './Components/Picture';
import Discuss from './Components/Discuss';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <header id='container'>
        <Header/>
      </header>

      <main>
        <Hero/>
        <Picture/>
        <Discuss/>
      </main>

      <footer id='container'>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
