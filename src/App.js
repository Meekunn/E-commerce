import Section1 from './pages/Section1/Section1'
import Footer from './components/Footer/Footer'
import Catalog from './pages/Catalog/Catalog'
import './App.scss'

const App = () => {
  return (
    <div className="App">
      <Section1 />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App
