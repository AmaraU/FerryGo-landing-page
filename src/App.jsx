import styles from './App.module.css';
import { Navbar } from "./components/Navbar/Navbar";
import { Welcome } from './components/Welcome/Welcome';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Services } from './components/Services/Services';
import { Banner } from './components/Banner/Banner';
import { Footer } from './components/Footer/Footer';
// import { Blank } from "./Blank";


function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Welcome />
      <AboutUs />
      <Services />
      <Banner />
      <Footer />
    </div>
  )
}

export default App
