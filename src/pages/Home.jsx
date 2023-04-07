import BootstrapAlert from '../components/BootstrapAlert'
import CardTest from '../components/CardTest'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import LargeCard from '../components/LargeCard'
import LargeCardTest from '../components/LargeCardTest'
import Nav from '../components/Nav'
import SmallCard from '../components/SmallCard'

function Home() {
  return (
    <>
      <Nav />
      <Carousel />
      <BootstrapAlert />
      <div className="main-content mb-4">
        <LargeCardTest />
        <SmallCard />
      </div>
      <Footer />
      {/* <CardTest/> */}
    </>
  )
}

export default Home
