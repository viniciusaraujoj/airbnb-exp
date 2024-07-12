import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

const App = () => {
  const cards = data.map((item) => {
    return <Card item={item} key={item.id} />
  })

  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <section className='cards'>{cards}</section>
    </div>
  )
}

export default App
