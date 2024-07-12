import photo_grid from '../assets/photo-grid.png'

const Hero = () => {
  return (
    <section className='hero'>
      <img src={photo_grid} alt='' className='hero--img' />
      <div className='hero--info'>
        <h1 className='hero--title'>Online Experiences</h1>
        <p className='hero--text'>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  )
}

export default Hero
