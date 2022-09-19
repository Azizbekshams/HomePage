
import Calcul from './components/Calculator/calcul';
import Caruselcard from './components/caruselCard/Caruselcard';
import Certifikat from './components/certificat/certificat';
import Flatcard from './components/flatCard/flatcard';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Map from './components/map/map';
import Navbar from './components/navbar/navbar';
import News from './components/news/news';
import Ocomapany from './components/ocompany/ocompany';
import PersonalCard from './components/personalAgent/personalCard';
import Toppraduct from './components/topproduct/toppraduct';
import VideoCard from './components/videocard/videocard';

function App() {
  return (
    <div >
     <Navbar/>
     <Header/>
     <Flatcard/>
     <PersonalCard/>
     <Calcul/>
     <Ocomapany/>
     <Caruselcard/>
     <Map/>
     <Toppraduct/>
     <News/>
     <VideoCard/>
     <Certifikat/>
     <Footer/>
    </div>
  );
}

export default App;
