import 'bootstrap/dist/css/bootstrap.min.css'
import 'boxicons/css/boxicons.min.css'
import './App.css'
import Nav from './components/Nav'
import Carousel from './components/Carousel'
import BootstrapAlert from './components/BootstrapAlert'
import LargeCard from './components/LargeCard'
import SmallCard from './components/SmallCard'
import Footer from './components/Footer'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Nav />
      <Carousel />
      <BootstrapAlert />
      <div className="main-content mb-4">
        <LargeCard />
        <SmallCard />
      </div>
      <Footer />
      {/* <Contact/> */}
    </>
  )
}
export default App
