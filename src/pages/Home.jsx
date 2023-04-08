import BootstrapAlert from '../components/BootstrapAlert'
import CardTest from '../components/CardTest'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import LargeCard from '../components/LargeCard'
import Nav from '../components/Nav'
import SmallCard from '../components/SmallCard'
import SmallCard2 from '../components/SmallCard2'

function Home() {
  return (
    <>
      <Nav />
      <Carousel />
      <BootstrapAlert />
      <div className="main-content mb-4">
        <LargeCard />
        <SmallCard />
        <SmallCard2 />
      </div>
      <Footer />
      {/* <CardTest/> */}
    </>
  )
}

export default Home
