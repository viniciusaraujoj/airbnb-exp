import logo from '../assets/airbnb-logo.png'

const Navbar = () => {
  return (
    <header>
      <nav className='nav'>
        <img src={logo} className='logo' />
      </nav>
    </header>
  )
}

export default Navbar
