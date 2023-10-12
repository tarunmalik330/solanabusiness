
import './App.css';
import { Aboutus } from './components/Aboutus';
import Faq from './components/Faq';
import Headersection from './components/Headersection'
import Imagesection from './components/Imagesection';
import Roadmap from './components/Roadmap';
import Supplies from './components/Supplies';
import Team from './components/Team';



function App() {
  return (
    <>
      <Headersection />
      <Aboutus />
      <Imagesection />
      <Supplies />
      <Roadmap />
      <Team />
      <Faq />
    </>
  );
}

export default App;
